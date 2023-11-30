import React from "react";

function Card({ username,btnText="Click me" }) {
  // console.log(props)
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 mt-10 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{btnText}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
