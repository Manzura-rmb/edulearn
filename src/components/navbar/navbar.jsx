import React from "react";
import logo from "../../assets/images/logo.png";
import { DownOutlined, ArrowRightOutlined  } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./navbar.scss";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Our teams
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Testimonial
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        404 Page
      </a>
    ),
    key: "1",
  },
];

export const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="This is logo" />
        <span>One Cloud</span>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            {" "}
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button>
          <a href="#">Join now <ArrowRightOutlined /></a>
        </button>
      </div>
    </nav>
  );
};
