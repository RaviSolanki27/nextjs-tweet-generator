"use client";
import React, { useState } from "react";
import { toPng } from "html-to-image";
import { useRef } from "react";
import Image from "next/image";
import verified from "../../public/verified.svg";
import blueVerified from "../../public/blue-verified.svg";
import profile from "../../public/profile.svg";
import dots from "../../public/dots.svg";

const Canvas = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState<
    "blue" | "golden" | "none"
  >("golden");
  const [userData, setUserData] = useState({
    name: "Raviraj Solanki",
    userId: "@ravirajsolanki_",
    tweet:
      "Please open in Desktop mode. Working on new features and mobile responsiveness",
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveImageToLocal = () => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        console.log(dataUrl);
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCheckboxChange = (value: "blue" | "golden" | "none") => {
    setSelectedCheckbox(value);
  };

  return (
    <div className="flex justify-center align mt-2 gap-3">
      <div
        ref={ref}
        className="bg-white h-[600px] w-[600px] flex flex-col justify-center items-center"
      >
        {/* Profile part */}
        <div className="flex items-start w-[450px]">
          <div className="h-[50px] w-[50px] mr-[12px]">
            <Image
              src={(selectedImage as string) ?? profile}
              width={50}
              height={50}
              alt="Picture of the author"
              className="!h-[50px] rounded-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-start">
              <p className="text-[#0F1419] font-semibold text-[15px]">
                {userData.name}
              </p>
              {selectedCheckbox !== "none" && (
                <Image
                  src={selectedCheckbox === "golden" ? verified : blueVerified}
                  width={20}
                  height={20}
                  alt=""
                  className="ml-[3px] max-w-[20px] max-h-[20px]"
                />
              )}
            </div>
            <p className="text-[#536471] text-[15px]">
              {userData.userId.toLowerCase()}
            </p>
          </div>
          <div className="ml-auto">
            <Image
              src={dots}
              width={20}
              height={20}
              alt=""
              className="ml-[3px] max-w-[20px] max-h-[20px]"
            />
          </div>
        </div>
        {/* Text part */}
        <div className="w-[450px] mt-4">
          <p className="text-[#0F1419] text-[17px] text-left">
            {userData.tweet}
          </p>
        </div>
        {/* Footer part */}
        <div></div>
      </div>

      <div className="flex flex-col gap-5">
        <input
          accept="images/*"
          type="file"
          name="img"
          id="img"
          onChange={handleImageChange}
        />
        <div className="flex gap-4">
          <label>
            <input
              type="checkbox"
              value="none"
              checked={selectedCheckbox === "none"}
              onChange={() => handleCheckboxChange("none")}
            />
            None
          </label>
          <label>
            <input
              type="checkbox"
              value="blue"
              checked={selectedCheckbox === "blue"}
              onChange={() => handleCheckboxChange("blue")}
            />
            Blue verified
          </label>
          <label>
            <input
              type="checkbox"
              value="golden"
              checked={selectedCheckbox === "golden"}
              onChange={() => handleCheckboxChange("golden")}
            />
            Golden verified
          </label>
        </div>

        <div className="flex gap-1">
          <input
            className="text-black"
            type="text"
            name="user"
            placeholder="Your name"
            value={userData.name}
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, name: e.target.value }))
            }
          />
          <input
            className="text-black"
            type="text"
            name="id"
            placeholder="Your user id"
            value={userData.userId}
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, userId: e.target.value }))
            }
          />
        </div>
        <div>
          <textarea
            name="tweet"
            id=""
            cols={48}
            rows={4}
            className="text-black"
            value={userData.tweet}
            onChange={(e) =>
              setUserData((pre) => ({ ...pre, tweet: e.target.value }))
            }
          ></textarea>
        </div>

        <button onClick={saveImageToLocal} className="bg-blue-500">
          Download
        </button>
      </div>
    </div>
  );
};

export default Canvas;
