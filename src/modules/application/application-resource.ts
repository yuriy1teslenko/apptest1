export class AppResource {
  public static $inject: Array<string> = ["$resource"];
  private baseUrl: string = "/api";

  constructor(private $resource: ng.resource.IResourceService) {}

  public entities(requestPath: string, id: string = ""): ng.resource.IResourceClass<any> {
    const requestUrl: string = `${this.baseUrl}/${requestPath}${id}`;
    return this.$resource(requestUrl);
  }
}
