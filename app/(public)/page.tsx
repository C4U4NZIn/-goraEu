'use client';
import styled from "styled-components";
import { userForm } from "./register/zod/validation";
import { userFormSchema } from "./register/zod/validation";
import { useState } from "react";
import { Flex, Radio } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomizedStepperIcon from "./components/stepper";
import Link from "next/link";



export default function Home() {

  
  return (
   <>
   <h1>Landing Page</h1>
   </>
  )
}
