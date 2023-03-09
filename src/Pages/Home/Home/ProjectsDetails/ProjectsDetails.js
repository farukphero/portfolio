import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const ProjectsDetails = () => {
const details = useLoaderData();

  return (
    <div>
      <div className="w-10/12 mx-auto text-center mt-3 md:mt-8">
        <h1 className="text-xl mb-7">For a larger view, click on the picture.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <PhotoProvider>
              <PhotoView src={details?.pictures[0]}>
                <img
                  className="h-56 w-full"
                  src={details?.pictures[0]}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <PhotoProvider>
              <PhotoView src={details?.pictures[1]}>
                <img
                  className="h-56 w-full"
                  src={details?.pictures[1]}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <PhotoProvider>
              <PhotoView src={details?.pictures[2]}>
                <img
                  className="h-56 w-full"
                  src={details?.pictures[2]}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          {details?.pictures[3] && (
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <PhotoProvider>
                <PhotoView src={details?.pictures[3]}>
                  <img
                    className="h-56 w-full"
                    src={details?.pictures[3]}
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          )}
          {details?.pictures[4] && (
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <PhotoProvider>
                <PhotoView src={details?.pictures[4]}>
                  <img
                    className="h-56 w-full"
                    src={details?.pictures[4]}
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          )}
          {details?.pictures[5] && (
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <PhotoProvider>
                <PhotoView src={details?.pictures[5]}>
                  <img
                    className="h-56 w-full"
                    src={details?.pictures[5]}
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          )}
        </div>
        <div className="bg-warning p-5 mt-10">
          <h6 className="mb-3 text-xl font-bold text-start">{details?.name}</h6>
          <p className="mb-3 text-start ">{details?.about}</p>
          <div className="flex justify-start">
          <a className="px-5 py-2 rounded-full mr-10 bg-gradient-to-r from-warning to-accent" href={details?.site}>Live site</a>
          <a className="px-5 py-2 rounded-full mr-10 bg-gradient-to-r from-accent to-warning" href={details.clientRepo}>Client repo</a>
          <a className="px-5 py-2 rounded-full bg-gradient-to-r from-warning to-accent" href={details.serverRepo}>Server Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
