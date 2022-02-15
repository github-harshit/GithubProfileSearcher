class Github{
    constructor(){
        this.client_id="e816729f849adee2c371";
        this.client_secret="4aceebc3364584f7e1822d23366469abb1982602";
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData= await profileResponse.json();
        return {
            profileData
        }
    }
}