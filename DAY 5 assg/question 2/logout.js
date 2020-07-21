console.log("hello")
class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has added ${this.luCoins} coins`);
        return this;
    }
    removecoins(){
        this.luCoins--;
        console.log(`${this.name} has removed ${this.luCoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
       console.log(`Name is ${this.user}, courses added ${this.course}`);
   }
}


let user1 = new User('siva',22,'siva@gmail.com')
let user2 = new User('sai',27,'sai@gmai.com')
let mod = new Moderator('subbu',22,'subbu@gmail.com','Moderator');
let admin = new Admin('vyshu',20,'vishu@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');

user1.login();

mod.login().addCoins().addCoins().addCoins().removecoins().getDetails().logout();
 user1.logout();

 user2.login();

admin.login().addCoins().addCourse(user2,'Javascript').removecoins().getDetails().logout();
 user2.logout();

 

 mod.deleteUser(user1);
 console.log(users);