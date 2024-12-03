import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({picture="https://github.com/shadcn.png", name="G"}) => {
  return (
    <Avatar>
      <AvatarImage src={picture} alt="@shadcn" />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
