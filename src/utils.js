import { createBrowserHistory } from "history";

const getCurrentMinutes = () => {
  return `0${new Date().getMinutes()}`.slice(-2);
};

const getCurrentHour = () => {
  return `0${new Date().getHours()}`.slice(-2);
};

const getCurrentMonth = () => {
  const date = new Date();
  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return month[date.getMonth()];
};

export const getCurrentDate = () => {
  const date = new Date();
  return `${date.getDate()} de ${getCurrentMonth()} ${date.getFullYear()}`;
};

export const getCurrentTime = () => {
  const minutes = getCurrentMinutes();
  const hour = getCurrentHour();

  return `${hour}:${minutes}`;
};

export const getHistory = () => {
  window.browserHistory = window.browserHistory || createBrowserHistory();

  return window.browserHistory;
};
