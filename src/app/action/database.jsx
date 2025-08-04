"use server";

import prisma from "./prisma";


export const getUser = async () =>{
    try{
      //community 테이블의 모든 데이터를 불러온다.
      
      const comm = await prisma.community.findMany();
      console.log(comm);

      return comm;
    }catch(err){
      throw new Error("get 오류")
    }
  }