
export class ServiceLocator {
    static services = {};

    getServices()
    {
        return ServiceLocator.services;
    }

}