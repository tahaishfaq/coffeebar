import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font- special-color-dark pt-4">

                <div className="container-fluid footer">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1" href="#">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1" href="#">
                                <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1" href="#">
                                <i className="fab fa-google-plus-g"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1" href="#">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1" href="#">
                                <i className="fab fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>

                <p className="text-white text-center">Copyright © 2020</p>                    
                </div>
            </footer>
        </div>
    )
}

export default Footer
