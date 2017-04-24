export class UserlistResource {
    public static $inject: string[] = ["$resource"];
    public resource: ng.resource.IResourceClass<any>;
    public getResults: ng.resource.IActionDescriptor;

    constructor(private $resource: ng.resource.IResourceService) {}

    public getResource(config?: any, requestBody?: any, url?: any): ng.resource.IResourceClass<any> {
        const requestUrl: string = url ? url : "https://jsonplaceholder.typicode.com/users";
        return this.$resource(requestUrl,
            {
                removeItems: {
                    method: "GET"
                }
            },
        );
    }
}
