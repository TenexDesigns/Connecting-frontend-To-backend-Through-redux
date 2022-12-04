/*
 
In mern Stack To connect Fronend to backend We use React-redux.
To manage The state of our fronend we use redux or reduxtoolkit.

The state of our fronend may be altered by user inetraction(e.g button clicking) which changes the state in redux.
The change of state caused by user interaction can be handled in redux by use of actions in  reducers 

<***in the example below add user is an action which handlews the state

const adduser = createSlice({
    name:"users",
    initialState:users,                                       //This is the state of the reducer
    reducers:{
        addusers:(state,action)=>{                            //The adddusers is the action that changes the state of the reducer upon usr interaction
            state.users.push(action.payload)
           
            

        }
      
    
    }
})


module.exports  = adduser.reducer          // reducer is exported as the default export
module.exports.add = adduser.actions       //The action sin this rreducer are accessed through the add


This actions are stored in reducers.This reducers are stored in a store.
const store = configstore({
    reducer:{
         user:addreducer,
    }
    
})

The front end accesses this store through the provider component ,which wraps the app component.
 <Provider store={store}><App/></Provider>

 The front end also access the initial state state in the redux through  the store passed as a prop through the provider component.
 To acess the store or states stored through the store inn the front end ,we use  the   useSelcetoor hook from react-redux libray
const users = useSelector((store)=>store.user.users)        //Here we accessed the state using the store then proceed g to the name given to the reducer in the store.This gives us access to the state in that reducer i.e users
 
.e.g We can map the items in arry state <div>  {users.map((user)=>{
.                                       return  (<div  key={user.id}>
.                                         <h1>{user.name} </h1> <div/>
.                                              <div/>


The fronend acceses this actions throuch the  name actions export in the reducer.
i.e module.exports.add = adduser.actions       //The action sin this rreducer are accessed through
In the front end the named acion is imported e.g const add = require('./redux/adduser').add
The action in the reducer are accessed through this named action
e.g    addusers()    

.We pass informationfrom the user as a payload throuch the brackts of this action
               onClick={()=>{
           dispatch(add.addusers({
            id:users[users.length -1].id +1,
            name:name,
            username:username
          }))




For The action to actually occur .It must be dispacted first.To dispatch an action we use the useDispactch hook from redux-react libary
  import { useDispatch } from 'react-redux'
  const dispatch = useDispatch()
  dipatch(addusers())


  In the the front end the To capture the users input we use useState to give it to the input e.g checkbox, radio buttons ,text field areas
         const [name,setName] = useState("")
        const [username,setUsername] = useState("")
   <input type='text' placeholder='username' onChange={(event)=>setUsername(event.target.value)} />
   We capture the input (event.target.value) and set it in the name state and username state
   After capturing the user input and seting it in a name state. We pass it as an action payload to be accessed in redux.










*/