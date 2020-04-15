// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import env from '@env/.env';

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.

export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: '',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  SOCKET_ENDPOINT: 'http://localhost:3000'
};
