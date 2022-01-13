import Cookie, { CookieAttributes } from "js-cookie";

const __Prefix__ = "__SMART__PAD__";

/**
 * 设置cookie
 * @param name cookie key
 * @param val  cookie val
 * @param opts
 */
export function cookieSet(
  name: string,
  val: string | object,
  opts?: CookieAttributes | undefined
) {
  name = name.toLocaleUpperCase();
  val = JSON.stringify(val);
  Cookie.set(__Prefix__ + name, val, opts);
}

/**
 * 获取cookie
 * @param name cookie key
 * @returns string | {[k in string]: unknown}
 */
export function cookieGet(name: string): string | { [k in string]: unknown } {
  let key = __Prefix__ + name.toLocaleUpperCase();
  const response = Cookie.get(key) || "";
  try {
    return JSON.parse(response);
  } catch (error) {
    return response;
  }
}

/**
 * 删除cookie
 * @param name
 * @param opts
 */
export function cookieDel(name: string, opts?: CookieAttributes | undefined) {
  let key = __Prefix__ + name.toLocaleUpperCase();
  Cookie.remove(key, opts);
}

/**
 * 删除所有cookie
 */
export function cookieRemoveAll() {
  let cookies = Cookie.get();
  const cookieKeys = Object.keys(cookies);
  cookieKeys.forEach((key) => {
    Cookie.remove(key);
  });
}
