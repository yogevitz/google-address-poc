import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { I18nextProvider } from 'react-i18next';
import { wixAxiosConfig } from '@wix/wix-axios-config';
import i18n from './i18n';
import App from './components/App';
import { create as createFedopsLogger } from '@wix/fedops-logger';
import { strToAddressFields } from './utils';

const baseURL = window.__BASEURL__;
const locale = window.__LOCALE__;

wixAxiosConfig(axios, { baseURL });

const fedopsLogger = createFedopsLogger('google-address-poc');

// Move the following `appLoaded()` call to the point where your app has fully loaded.
// See https://github.com/wix-private/fed-infra/blob/master/fedops/fedops-logger/README.md
fedopsLogger.appLoaded();

const getAddressFields = async () => {
  const res = await axios.get(
    'https://www.gstatic.com/chrome/autofill/libaddressinput/chromium-i18n/ssl-address/data/US',
  );
  const { require } = res.data;
  console.log('require', require);
  const requiredFields = strToAddressFields(require);
  console.log('requiredFields', requiredFields);
};

getAddressFields();

ReactDOM.render(
  <Suspense fallback="...loading">
    <I18nextProvider i18n={i18n(locale)}>
      <App />
    </I18nextProvider>
  </Suspense>,
  document.getElementById('root'),
);
