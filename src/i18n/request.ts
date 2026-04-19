import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  const common = (await import(`../../messages/${locale}/common.json`)).default;
  const home = (await import(`../../messages/${locale}/home.json`)).default;
  const adocao = (await import(`../../messages/${locale}/adocao.json`)).default;
  const coreSystem = (await import(`../../messages/${locale}/core-system.json`)).default;
  const viajaflux = (await import(`../../messages/${locale}/viajaflux.json`)).default;

  return {
    locale,
    messages: {
      ...common,
      ...home,
      adocao: adocao,
      "core-system": coreSystem,
      // Backward compatibility for old key coreSystem if needed, but I'll update the component
      coreSystem: coreSystem,
      viajaflux: viajaflux,
    }
  };
});
