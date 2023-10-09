import axios from "axios";
import fetchAdapter from "utils/adapters";
import _runtime from "regenerator-runtime";
import { client } from "api";

client.defaults.adapter = fetchAdapter;

type Config = {
  host?: string;
  port?: number;
};
const config = {
  host: "http://127.0.0.1",
  port: 5757,
};

export const configure = (cfg: Config) => {
  Object.keys(cfg).forEach((k) => {
    (config as any)[k] = (cfg as any)[k];
  });
};

const getCurrentTab = async () => {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

const getPasswordInputs = () => {
  const inputFields = Array.from(document.getElementsByTagName("input"));
  const passwordFields = inputFields.filter((el) => el.type === "password");
  return passwordFields;
};

const setPassword = () => {
  const inputFields = Array.from(document.getElementsByTagName("input"));
  const passwordFields = inputFields.filter((el) => el.type === "password");
  for (const pwField of passwordFields) {
    pwField.value = "Hello There!";
  }
};

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tab.url?.startsWith("chrome://")) return;

  const injectionResult = await chrome.scripting.executeScript({
    target: { tabId },
    func: getPasswordInputs,
  });
  const passwordFields = injectionResult[0]?.result;
  if (passwordFields == null || passwordFields.length === 0) {
    console.log("No user input fields available.");
    return;
  }

  await chrome.scripting.executeScript({
    target: { tabId },
    func: setPassword,
  });

  console.log(passwordFields);
  console.log(passwordFields.map((el) => el.value));
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const url = `${config.host}:${config.port}/api/teapot`;
  const resp = await client.get(url);
  console.log(resp);
});
