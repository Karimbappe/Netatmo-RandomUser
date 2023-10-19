import React, { useState } from "react";
import "./card.css";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  CalendarOutlined,
  LockOutlined,
  DeleteOutlined
} from "@ant-design/icons";

const Card = ({ user, onDelete }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Function to handle icon hover work in assosiation with the one below
  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  // Function to render the corresponding text based on hovered icon
  const renderText = () => {
    switch (hoveredIcon) {
      case "name":
        return (
          <>
            <h2 className="sub-text">Hi my name is</h2>
            <h1 className="text">{user.name.first} {user.name.last}</h1>
          </>
          );
      case "email":
        return (
          <>
            <h2 className="sub-text">My email adress is</h2>
            <h1 className="text">{user.email}</h1>
          </>
          );
          case "birthday":
          const formattedBirthday = new Date(user.registered.date).toLocaleDateString("en-GB");
        return (
          <>
            <h2 className="sub-text">My  birthday is</h2>
            <h1 className="text">{formattedBirthday}</h1>
          </>
          );
      case "address":
        return (
          <>
            <h2 className="sub-text">My adress is</h2>
            <h1 className="text">{user.location.street.number} {user.location.street.name}</h1>
          </>
          );
      case "phone":
        return (
          <>
            <h2 className="sub-text">My phone number is</h2>
            <h1 className="text">{user.phone}</h1>
          </>
          );
          case "password":
        return (
          <>
            <h2 className="sub-text">My password is</h2>
            <h1 className="text">{user.login.password}</h1>
          </>
          );
      default:
        return (
          <>
            <h2 className="sub-text">Hi my name is</h2>
            <h1 className="text">{user.name.first} {user.name.last}</h1>
          </>
        );
    }
  };

  return (
    <div className="user-card">
      <div className="user-card-header"></div>
      <button className="delete-button" onClick={() => onDelete(user.login.uuid)}><DeleteOutlined /></button>
      <div className="user-picture-frame"></div>
        <img
          className="user-picture"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last} profile pic`}
        />
      <div className="variable-text">
        <p>{renderText()}</p>
      </div>
      <div className="icon-container">
        <div
          className="icon-text"
          onMouseEnter={() => handleIconHover("name")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <UserOutlined className="icon" />
        </div>
        <div
          className="icon-text"
          onMouseEnter={() => handleIconHover("email")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <MailOutlined className="icon" />
        </div>
        <div
          className="icon-text"
          onMouseEnter={() => handleIconHover("birthday")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <CalendarOutlined className="icon" />
        </div>
        <div
          className="icon-text"
          onMouseEnter={() => handleIconHover("address")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <HomeOutlined className="icon" />
        </div>
        <div
          className="icon-text"
          onMouseEnter={() => handleIconHover("phone")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <PhoneOutlined className="icon" />
        </div>
        <div
          className="icon-text"
          onMouseEnter={() => handleIconHover("password")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <LockOutlined className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;