import React, { useState } from "react";
import styled from "styled-components";
import avatar1 from "../assets/images/UA1.png";
import avatar2 from "../assets/images/UA2.png";
import avatar3 from "../assets/images/UA3.png";
import avatar4 from "../assets/images/UA4.png";
import avatar5 from "../assets/images/UA5.png";
import avatar6 from "../assets/images/UA6.png";
import avatar7 from "../assets/images/UA7.png";
import avatar8 from "../assets/images/UA8.png";

const AvatarList = () => {
  const [avatarList, setAvatarList] = useState([
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
  ]);

  return (
    <AvatarListContainer>
      {avatarList.map((avatar) => (
        <AvatarItem src={avatar} />
      ))}
    </AvatarListContainer>
  );
};

export default AvatarList;

const AvatarListContainer = styled.div`
  width: 100%;
  display: flex;
  row-gap: 8px;
  column-gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;

const AvatarItem = styled.img`
  width: 42px;
  height: 42px;
`;
