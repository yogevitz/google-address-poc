import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { I18nextProvider } from 'react-i18next';
import { wixAxiosConfig } from '@wix/wix-axios-config';
import i18n from './i18n';
import App from './components/App';
import { create as createFedopsLogger } from '@wix/fedops-logger';
import { strToAddressFields, fmtToAddressFields, mapNames } from './utils';

const baseURL = window.__BASEURL__;
const locale = window.__LOCALE__;

wixAxiosConfig(axios, { baseURL });

const fedopsLogger = createFedopsLogger('google-address-poc');

// Move the following `appLoaded()` call to the point where your app has fully loaded.
// See https://github.com/wix-private/fed-infra/blob/master/fedops/fedops-logger/README.md
fedopsLogger.appLoaded();

const getAddressFields = async (country: string) => {
  const res = await axios.get(
    `https://chromium-i18n.appspot.com/ssl-address/data/${country}`,
  );
  const {
    require,
    fmt,
    state_name_type,
    sub_names,
    sub_lnames,
    zip,
    lang,
    languages,
  } = res.data;
  const address: any = {};
  address.requiredFields = require ? strToAddressFields(require) : undefined;
  address.possibleFields = fmt ? fmtToAddressFields(fmt) : undefined;
  address.administrativeAreaType = state_name_type || 'province';
  address.subNames = sub_names ? mapNames(sub_names) : undefined;
  address.subLNames = sub_lnames ? mapNames(sub_lnames) : undefined;
  address.zipFormat = zip ? new RegExp(zip, 'g') : undefined;
  address.lang = lang;
  address.languages = languages;
  console.log(address);
};

getAddressFields('CA');

ReactDOM.render(
  <Suspense fallback="...loading">
    <I18nextProvider i18n={i18n(locale)}>
      <App />
    </I18nextProvider>
  </Suspense>,
  document.getElementById('root'),
);
