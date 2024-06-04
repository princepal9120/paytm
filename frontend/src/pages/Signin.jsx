import React from 'react'
import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'

export function Signin() {
  return (
   <div className='flex justify-center h-screen bg-slate-500'>
    <div className='flex flex-col justify-center'>
      <div className='bg-white rounded-lg w-90 h-max p-2 px-4 text-center'>
    <Heading label ={"Sign In"}/>
    <SubHeading label={"Enter your credentials to access your account"}/>
    <InputBox placeholder={"princepal@gmail.com"} label={"Email"}/>
    <InputBox placeholder={"12345678"} label={"Password"}/>
    <div className="pt-4">
      <Button label={"Sign in"}/>
    </div>
    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>

      </div>
    </div>

   </div>
  )
}

