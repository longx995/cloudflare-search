export const env = {
  // 默认超时时间(毫秒) - Default timeout in milliseconds
  DEFAULT_TIMEOUT: "3000",

  // 支持的搜索引擎列表 - Supported search engines
  SUPPORTED_ENGINES: ["brave", "duckduckgo", "bing"],

  // 默认启用的搜索引擎 - Default enabled engines
  DEFAULT_ENGINES: [
    "brave",
    "duckduckgo",
    // "bing" // Bing 目前结果不稳定，默认禁用 - Bing results are currently unstable, disabled by default
  ]
};

export const setEnv = (newEnv) => {
  Object.assign(env, newEnv);
};
