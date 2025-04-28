import { registerUser } from "../app/actions/user"
import {
    Button,
    Center,
    Field,
    Fieldset,
    For,
    HStack,
    Input,
    NativeSelect,
    Stack,
    Text
  } from "@chakra-ui/react"
  import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

  const Register = () => {
    const navigate = useNavigate();
        const dispatch = useDispatch();
      const { user, loading, error } = useSelector((state) => state.user);

      console.log(error ,user);
      
    const [data,setData] = useState({
      name : "",
      email : "",
      password : ""
    })
    // console.log(data);
    
const handelChange = (e)=>{
const {name,value} = e.target
setData({...data, [name] : value})
}

const handelSubmit = async()=>{
  const result = await dispatch(registerUser(data)); 
      console.log(result);
      
    if (result.payload?.newUser) {
  
        // Clear form data
        setData({
          email: "",
          password: "",
        });
  
        // Navigate to singin page
        navigate("/singin");
      }
}
    return (
    <Center py={5}>
      <Fieldset.Root  size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Register Now</Fieldset.Legend>
          <Fieldset.HelperText>
            Please provide your details below.
          </Fieldset.HelperText>
        </Stack>
   {error && <Text size={"sm"} color="red.500">{error?.errors?.[0] || error?.massage}</Text>}
          {user && <p>Welcome, {user.name}!</p>}
        <Fieldset.Content >
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input value={data.name} onChange={handelChange} name="name" />
          </Field.Root>
  
          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input value={data.email} onChange={handelChange} name="email" type="email" />
          </Field.Root>
  
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input value={data.password} onChange={handelChange} name="password" type="text" />
          </Field.Root>
        </Fieldset.Content>
  
        <Button onClick={handelSubmit} type="submit" alignSelf="flex-start">
          SingUp
        </Button>
        <HStack>
        <Fieldset.HelperText>
            If you already have a account , you can
          </Fieldset.HelperText>
          <Text _hover={{textDecoration : "underline"}}><Link  to={"/singin"}>SingIn</Link></Text>
        </HStack>
        
      </Fieldset.Root>
      </Center>
    )
  }

  export default Register
  