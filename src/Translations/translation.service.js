/* eslint-env es6 */
import * as _ from 'lodash';
import intl from './i18n';

const getListOfMessages = (context, intlConfig) => {
  const DEFAULT_AVAILABLE_LANGUAGES = intlConfig.availableLocales;
  let messages = require('./en').default;
  if (DEFAULT_AVAILABLE_LANGUAGES.includes(context)) {
    messages = require(`./${context}`).default;
  }
  return messages;
};

/**
 * Usage
 * replace('hello {{ name }}', { name: 'world' }) // hello world
 * replace('{{ greeting }} {{ name }}', { greeting: 'hi', name: 'world' }) // hi world
 * replace('hello {{ name }}', { name: (key, i, data, str) => key }) // hello name
 * replace('hello !! name !!', { name: 'world' }, [ '!! ', ' !!' ]) // hello world
 *
 * Replace key/value pairs in a string.
 * @public
 * @param {String} str - A string to replace the contents of.
 * @param {Object} data - Key/value pairs, where value must be a function or a string.
 * @param {Array} delimiter - Optional array with a start and end delimiter.
 * @returns {String} - A string with replaced content.
 */
const replace = (str, data, delimiter = ['{{ ', ' }}']) => {
  let finalStr = str;

  Object.keys(data).forEach((key, i) => {
    const regexp = new RegExp(delimiter[0] + key + delimiter[1], 'g');
    const value = typeof data[key] === 'function' ? data[key](key, i, data, str) : data[key];
    finalStr = str.replace(regexp, value);
  });

  return finalStr;
};

const getMessageContent = messageId => {
  let messages = {};
  let message = messageId;

  const intlConfig = intl();
  const DEFAULT_LANGUAGE = intlConfig.locale;

  messages = getListOfMessages(DEFAULT_LANGUAGE, intlConfig);
  const messageIds = messageId.split('.');

  if (messageIds && messageIds.length >= 1) {
    message = messages;
    for (let index = 0; index < messageIds.length; index++) {
      const element = messageIds[index];
      message = message[element] !== undefined ? message[element] : message;
    }
    if (!message || typeof message !== 'string') {
      message = messageId;
    }
  }

  return message;
};

/**
 * Getting a translation message.
 *
 * It gets a message stored in the messages directory based
 * on the Request language or a language passed as string.
 * The string message could have variables or parameters,
 * they should be represented by {{ parameterName }}
 * then the "parameters" parameter should contain a json object
 * with the value on this way {parameterName: parameterValue,}
 * the parameterValue should be a value convertible into string
 *
 * @param messageId string "login.success"
 * @param parameter object {parameterName: parameterValue,}
 */
export default (messageId, parameters) => {
  let messagesList = {};
  let message = messageId;

  const intlConfig = intl();
  const DEFAULT_LANGUAGE = intlConfig.locale;

  messagesList = getListOfMessages(DEFAULT_LANGUAGE, intlConfig);
  const messageIds = messageId.split('.');

  getMessageContent(messageId);

  message = _.get(messagesList, messageId);

  if (!message) {
    message = messageId;
  }

  const objectConstructor = {}.constructor;
  if (message !== messageIds && parameters && parameters.constructor === objectConstructor) {
    message = replace(message, parameters);
  }

  return message;
};
