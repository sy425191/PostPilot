"use client";

import { XCircleIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

const Home = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  return (
    <div className="w-full px-8 text-xs">
      <div className="w-full text-sm flex items-center justify-between font-semibold rounded-xl text-center border px-4 py-2">
        <div>Create/Schedule New Post</div>
        <div className="flex gap-x-3">
          <button className="px-3 py-1.5 text-xs bg-purple-600 text-white rounded-xl hover:bg-purple-800 transition duration-200">
            Preview
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-[50%] flex flex-col">
          <div className="form w-full my-8 flex flex-col gap-y-3">
            <div>
              <input
                type="text"
                placeholder="Post Title"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <textarea
                placeholder="Post Content"
                rows={10}
                className="w-full px-4 py-2 resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              ></textarea>
            </div>
          </div>

          <div
            className="bg-purple-600 text-white flex items-center justify-center rounded-2xl px-3 py-5 cursor-pointer hover:bg-purple-800 transition duration-200"
            onClick={() => {
              if (fileRef.current) fileRef.current.click();
            }}
          >
            <div className="text-sm font-semibold text-center">
              Select files
            </div>
            <input
              ref={fileRef}
              hidden
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={(e) => {
                if (e.target.files) {
                  setSelectedFiles(Array.from(e.target.files));
                }
              }}
            />
          </div>

          <div className="mt-4 flex flex-col gap-y-4">
            {selectedFiles.map((file) => (
              <div
                key={file.name}
                className="w-full min-h-12 text-xs bg-gray-700 text-white rounded-2xl flex flex justify-between items-center px-4 py-2 gap-x-2"
              >
                <div className="flex flex-col">
                  <div>{file.name}</div>
                  <div>{file.type}</div>
                </div>

                <div
                  className="size-6 rounded-full bg-red-500 flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setSelectedFiles(selectedFiles.filter((f) => f !== file));
                  }}
                >
                  <XCircleIcon className="size-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-y-4">
          {/* select platform to post */}
          <div className="w-full my-8 flex flex-col items-end gap-y-3">
            <div className="w-72 px-4 py-2 text-purple-900 font-semibold rounded-lg flex items-center border border-gray-300">
              <input type="checkbox" className="mr-2" />
              <span className="">Twitter</span>
            </div>

            {/* post now button */}
            <div className="px-4 py-2 min-w-72 text-rose-900 font-semibold rounded-lg flex flex-col gap-y-4 items-end border border-gray">
              <button className=" px-4 py-2 text-white font-semibold rounded-lg flex items-center bg-rose-600 hover:bg-rose-800 transition duration-200">
                Post Now
              </button>

              <div className="text-xs text-gray-400">
                This will post to all selected platforms
              </div>
            </div>

            <div className="px-4 py-2 min-w-72 text-purple-900 font-semibold rounded-lg flex flex-col gap-y-4 items-end border border-gray-300">
              <div className="ml-auto flex items-center gap-x-2">
                <div className="text-xs text-gray-400">Post at</div>
                <input
                  type="time"
                  className="text-xs text-gray-400 bg-transparent border"
                  pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
                  value={"12:45"}
                />
                <div className="text-xs text-gray-400">on</div>
                <input
                  type="date"
                  className="text-xs text-gray-400 bg-transparent border"
                  value={"2021-09-01"}
                />
              </div>

              <button className=" px-4 py-2 text-white font-semibold rounded-lg flex items-center border border-gray-300 bg-purple-600 hover:bg-purple-800 transition duration-200">
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
