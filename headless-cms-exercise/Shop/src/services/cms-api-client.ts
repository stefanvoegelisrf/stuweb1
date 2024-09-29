export class CmsApiClient {
    baseUrl = "http://localhost:1337/api";
    async GetManufacturers() {
        var response = await fetch(`${this.baseUrl}/brands?populate=*&sort=name`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer 5ad1bb61481b8be90f9d6947b887144c9882057b7b896628023a5edf24cb95465f7bfad8a8a45bcdcff72e39aebcb21b44c0e68cd0b6de7b932c36a59742c67827a43d4097e304577573ed6662b53e0e08aed0664c4449c0521e9ff020aac9077ff2193751f3317615ef73e6111d92adaecf193891c8d36efebc2ca6cfd235e1"
            }
        });
        return response.json();
    }
    async GetShoes(brand: string | undefined = undefined) {
        var filter = "";
        if (brand != undefined) {
            filter = `&filters=brands$eq=${brand}`
        }
        var response = await fetch(`${this.baseUrl}/shoes?populate=*&sort=name`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer 5ad1bb61481b8be90f9d6947b887144c9882057b7b896628023a5edf24cb95465f7bfad8a8a45bcdcff72e39aebcb21b44c0e68cd0b6de7b932c36a59742c67827a43d4097e304577573ed6662b53e0e08aed0664c4449c0521e9ff020aac9077ff2193751f3317615ef73e6111d92adaecf193891c8d36efebc2ca6cfd235e1"
            }
        });
        return response.json();
    }
}