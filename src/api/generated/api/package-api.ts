/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PackageInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { RepositoryInfo } from '../models';
/**
 * PackageApi - axios parameter creator
 * @export
 */
export const PackageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancels a package installation.
         * @param {string} packageId Installation Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelPackageInstallation: async (packageId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'packageId' is not null or undefined
            if (packageId === null || packageId === undefined) {
                throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling cancelPackageInstallation.');
            }
            const localVarPath = `/Packages/Installing/{packageId}`
                .replace(`{${"packageId"}}`, encodeURIComponent(String(packageId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a package by name or assembly GUID.
         * @param {string} name The name of the package.
         * @param {string} [assemblyGuid] The GUID of the associated assembly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageInfo: async (name: string, assemblyGuid?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getPackageInfo.');
            }
            const localVarPath = `/Packages/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (assemblyGuid !== undefined) {
                localVarQueryParameter['assemblyGuid'] = assemblyGuid;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets available packages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackages: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Packages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets all package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepositories: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Repositories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Installs a package.
         * @param {string} name Package name.
         * @param {string} [assemblyGuid] GUID of the associated assembly.
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [repositoryUrl] Optional. Specify the repository to install from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        installPackage: async (name: string, assemblyGuid?: string, version?: string, repositoryUrl?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling installPackage.');
            }
            const localVarPath = `/Packages/Installed/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (assemblyGuid !== undefined) {
                localVarQueryParameter['assemblyGuid'] = assemblyGuid;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (repositoryUrl !== undefined) {
                localVarQueryParameter['repositoryUrl'] = repositoryUrl;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets the enabled and existing package repositories.
         * @param {Array<RepositoryInfo>} [repositoryInfo] The list of package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRepositories: async (repositoryInfo?: Array<RepositoryInfo>, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Repositories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof repositoryInfo !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(repositoryInfo !== undefined ? repositoryInfo : {}) : (repositoryInfo || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PackageApi - functional programming interface
 * @export
 */
export const PackageApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancels a package installation.
         * @param {string} packageId Installation Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelPackageInstallation(packageId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PackageApiAxiosParamCreator(configuration).cancelPackageInstallation(packageId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets a package by name or assembly GUID.
         * @param {string} name The name of the package.
         * @param {string} [assemblyGuid] The GUID of the associated assembly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackageInfo(name: string, assemblyGuid?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PackageInfo>> {
            const localVarAxiosArgs = await PackageApiAxiosParamCreator(configuration).getPackageInfo(name, assemblyGuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets available packages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPackages(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PackageInfo>>> {
            const localVarAxiosArgs = await PackageApiAxiosParamCreator(configuration).getPackages(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets all package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRepositories(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RepositoryInfo>>> {
            const localVarAxiosArgs = await PackageApiAxiosParamCreator(configuration).getRepositories(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Installs a package.
         * @param {string} name Package name.
         * @param {string} [assemblyGuid] GUID of the associated assembly.
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [repositoryUrl] Optional. Specify the repository to install from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async installPackage(name: string, assemblyGuid?: string, version?: string, repositoryUrl?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PackageApiAxiosParamCreator(configuration).installPackage(name, assemblyGuid, version, repositoryUrl, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Sets the enabled and existing package repositories.
         * @param {Array<RepositoryInfo>} [repositoryInfo] The list of package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setRepositories(repositoryInfo?: Array<RepositoryInfo>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PackageApiAxiosParamCreator(configuration).setRepositories(repositoryInfo, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PackageApi - factory interface
 * @export
 */
export const PackageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Cancels a package installation.
         * @param {string} packageId Installation Id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelPackageInstallation(packageId: string, options?: any): AxiosPromise<void> {
            return PackageApiFp(configuration).cancelPackageInstallation(packageId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a package by name or assembly GUID.
         * @param {string} name The name of the package.
         * @param {string} [assemblyGuid] The GUID of the associated assembly.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackageInfo(name: string, assemblyGuid?: string, options?: any): AxiosPromise<PackageInfo> {
            return PackageApiFp(configuration).getPackageInfo(name, assemblyGuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets available packages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPackages(options?: any): AxiosPromise<Array<PackageInfo>> {
            return PackageApiFp(configuration).getPackages(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRepositories(options?: any): AxiosPromise<Array<RepositoryInfo>> {
            return PackageApiFp(configuration).getRepositories(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Installs a package.
         * @param {string} name Package name.
         * @param {string} [assemblyGuid] GUID of the associated assembly.
         * @param {string} [version] Optional version. Defaults to latest version.
         * @param {string} [repositoryUrl] Optional. Specify the repository to install from.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        installPackage(name: string, assemblyGuid?: string, version?: string, repositoryUrl?: string, options?: any): AxiosPromise<void> {
            return PackageApiFp(configuration).installPackage(name, assemblyGuid, version, repositoryUrl, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets the enabled and existing package repositories.
         * @param {Array<RepositoryInfo>} [repositoryInfo] The list of package repositories.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setRepositories(repositoryInfo?: Array<RepositoryInfo>, options?: any): AxiosPromise<void> {
            return PackageApiFp(configuration).setRepositories(repositoryInfo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelPackageInstallation operation in PackageApi.
 * @export
 * @interface PackageApiCancelPackageInstallationRequest
 */
export interface PackageApiCancelPackageInstallationRequest {
    /**
     * Installation Id.
     * @type {string}
     * @memberof PackageApiCancelPackageInstallation
     */
    readonly packageId: string
}

/**
 * Request parameters for getPackageInfo operation in PackageApi.
 * @export
 * @interface PackageApiGetPackageInfoRequest
 */
export interface PackageApiGetPackageInfoRequest {
    /**
     * The name of the package.
     * @type {string}
     * @memberof PackageApiGetPackageInfo
     */
    readonly name: string

    /**
     * The GUID of the associated assembly.
     * @type {string}
     * @memberof PackageApiGetPackageInfo
     */
    readonly assemblyGuid?: string
}

/**
 * Request parameters for installPackage operation in PackageApi.
 * @export
 * @interface PackageApiInstallPackageRequest
 */
export interface PackageApiInstallPackageRequest {
    /**
     * Package name.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly name: string

    /**
     * GUID of the associated assembly.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly assemblyGuid?: string

    /**
     * Optional version. Defaults to latest version.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly version?: string

    /**
     * Optional. Specify the repository to install from.
     * @type {string}
     * @memberof PackageApiInstallPackage
     */
    readonly repositoryUrl?: string
}

/**
 * Request parameters for setRepositories operation in PackageApi.
 * @export
 * @interface PackageApiSetRepositoriesRequest
 */
export interface PackageApiSetRepositoriesRequest {
    /**
     * The list of package repositories.
     * @type {Array<RepositoryInfo>}
     * @memberof PackageApiSetRepositories
     */
    readonly repositoryInfo?: Array<RepositoryInfo>
}

/**
 * PackageApi - object-oriented interface
 * @export
 * @class PackageApi
 * @extends {BaseAPI}
 */
export class PackageApi extends BaseAPI {
    /**
     * 
     * @summary Cancels a package installation.
     * @param {PackageApiCancelPackageInstallationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public cancelPackageInstallation(requestParameters: PackageApiCancelPackageInstallationRequest, options?: any) {
        return PackageApiFp(this.configuration).cancelPackageInstallation(requestParameters.packageId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a package by name or assembly GUID.
     * @param {PackageApiGetPackageInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public getPackageInfo(requestParameters: PackageApiGetPackageInfoRequest, options?: any) {
        return PackageApiFp(this.configuration).getPackageInfo(requestParameters.name, requestParameters.assemblyGuid, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets available packages.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public getPackages(options?: any) {
        return PackageApiFp(this.configuration).getPackages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all package repositories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public getRepositories(options?: any) {
        return PackageApiFp(this.configuration).getRepositories(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Installs a package.
     * @param {PackageApiInstallPackageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public installPackage(requestParameters: PackageApiInstallPackageRequest, options?: any) {
        return PackageApiFp(this.configuration).installPackage(requestParameters.name, requestParameters.assemblyGuid, requestParameters.version, requestParameters.repositoryUrl, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets the enabled and existing package repositories.
     * @param {PackageApiSetRepositoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PackageApi
     */
    public setRepositories(requestParameters: PackageApiSetRepositoriesRequest = {}, options?: any) {
        return PackageApiFp(this.configuration).setRepositories(requestParameters.repositoryInfo, options).then((request) => request(this.axios, this.basePath));
    }
}
