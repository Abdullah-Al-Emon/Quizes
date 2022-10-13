import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="bg-slate-100 my-10 rounded-lg mx-10 py-10 md:px-10 px-2">
                <div className="  text-xl font-medium pb-4">
                    What is the purpose of React Router?
                </div>
                <div >
                    <p>ReactJS Router is mainly used for developing Single Page Web Applications. 
                    React Router is used to define multiple routes in the application. When a user 
                    types a specific URL into the browser, and if this URL path matches any 'route' 
                    inside the router file, the user will be redirected to that particular route.</p>
                </div>
            </div>
            <div className="collapse bg-slate-100 my-10 rounded-lg mx-10 py-10 md:px-10 px-2">
                <div className="text-xl font-medium pb-4">
                How does context api works?
                </div>
                <div >
                    <p>The React Context API is a way for a React app to effectively produce global variables
                    that can be passed around. This is the alternative to "prop drilling" or moving props from
                    grandparent to child to parent, and so on. Context is also touted as an easier, lighter 
                    approach to state management using Redux.</p>
                </div>
            </div>
            <div className="bg-slate-100 my-10 rounded-lg mx-10 py-10 md:px-10 px-2">
                <div className="text-xl font-medium pb-4">
                    What is useRef() hook?
                </div>
                <div>
                    <p>The useRef Hook allows you to persist values between renders. It can be used to
                        store a mutable value that does not cause a re-render when updated. It can 
                        be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;