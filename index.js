// const obj = {
//     name: 'alex'
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// Object.defineProperty(obj, 'job', {
//     value:' dev',
//     writable:true,
//     enumerable:true,
//     configurable:false,
// })

// Object.defineProperties(obj,{
//     job:{
//         value:'dev',
//         writable:true,
//         configurable:true
//     },
//     city:{
//         value:'chisinau',
//         configurable:true
//     }
// })
// console.log(Object.getOwnPropertyDescriptor(obj, 'job'))




// for(let key in obj){
//     console.log(key)
// }



// console.log(obj)
// obj.job = 'tester'

// console.log(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))



// const obj = {
//     name: 'victor'
// }

// Object.defineProperty(obj, 'job',{
//     value:'dev',
//     writable:true,
//     enumerable:true,
//     configurable:true,
// })

// Object.preventExtensions(obj)

// Object.prototype.func = (arg) => console.log(arg)

// obj.job = 'dev'

// console.log(Object.isExtensible(obj))

// obj.func('pass')


// Object.seal(obj)
// obj.name = 'alex'
// console.log(Object.isSealed(obj))

// Object.freeze(obj)

// obj.name = 'vasile'

// console.log(Object.isFrozen(obj))

// const func = (arg1, arg2) => {
//     return arg1+' '+ 'my name is: ' + this.name + arg2
// }

// const obj = {
//     name:'alex',
//     age:90,
//     greet: func,
// }

// const obj1 = {
//     name:'victor',
//     greet: func,
// }
// const obj2 = {
//     name:'elena',
//     greet: func,
// }

// const bound = func.bind(obj2)

//     // console.log(obj.greet('salut',')')) 
//     // console.log(obj1.greet.call(obj, 'hey', '!')) 
//     // console.log(obj2.greet.apply(obj, ['hi','!!'])) 

//     console.log(bound('hi', '!'))


// class SalesManager {
//     constructor(name, age, sections) {
//         this.name = name
//         this.age = age
//         this.sections = sections
//     }
// }
//     const sergiu =new SalesManager({name: 'sergiu',age: 23, sections: 'botanica'})
 
//     console.log(sergiu)



// const func = (name, age)=>{
//     const obj2 ={
//         name: name,
//         age: age
//     }
//     console.log('obj2',obj2)
// }
// const obj={
//     name: 'alex',
//     age:23
// }

// func('alex',43)





class SalesManager {
    constructor({name, age, sections}) {
        this.name = name
        this.age = age
        this.sections = sections
        this.post = 'manager'
    }
    responsability(){
        console.log('consultant')
    }
}
    const sergiu =new SalesManager({name: 'sergiu',age: 23, sections: 'botanica'})
 
    // console.log(sergiu)
    // sergiu.responsability()

    class SalesDirector extends SalesManager {
        constructor(options) {
            super(options)
            this.experience = options.experience
            this.post ='director vanzari'
        }
    }

    const  andrei = new SalesDirector({name :'andrei', age:40, sections: 'centru', experience: 15})

    console.log(andrei)