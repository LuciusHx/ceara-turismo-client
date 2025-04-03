export class Places {
        foto: string;
        name: string;
        city: string;
        about: string;
        visitable: boolean;
    
        constructor( 
            foto: string,
            name: string,
            city: string,
            about: string,
            visitable: boolean,
        ) {
            this.foto= foto;
            this.name= name;
            this.city= city;
            this.about= about;
            this.visitable= visitable;
        }
}
