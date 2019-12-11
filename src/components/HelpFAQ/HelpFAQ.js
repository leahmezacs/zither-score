import React, { Component } from "react";
//import "HelpFQA.css";

class HelpFQA extends Component {
    render() {
        return (
            <div>
                <header>
                    <div>
                        <h1>NumScore User's FAQ</h1>
                    </div>
                </header>
                <div>
                    <ul>
                        <li><a href="#basics">Basics</a></li>
                        <li><a href="#account">Account</a></li>


                    </ul>
                    <div>
                        <ul id="basics" >
                            <li class="cd-faq__title">
                                <h2>Basics</h2>
                            </li>
                            <li>
                                <a href="#0"><span>How to see the saved score sheet?</span></a>
                                <div>
                                    <div>
                                        <p>First, go to NavBar and click on Icon, you will see a dropdown menu, then click on library, you will see all the score sheet you saved.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#0"><span>why I did not see my saved score after I click the view of certain score sheet?</span></a>
                                <div>
                                    <div>
                                        <p>After clicked view, you will see the edit page, in order to see the scores you saved, you have to clicked on the plus Icon, then the scores will show up.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#0"><span>Can I remove a score sheet?</span></a>
                                <div>
                                    <div>
                                        <p>First, go to NavBar and click on icon, and then click library, you will see the score
                                            sheets you created, and then click on three dots on the right, it will show you a
								dropdown menue, and then you can delete your score sheet.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#0"><span>How do reviews work?</span></a>
                                <div>
                                    <div>
                                        <p>Clicked on the Discover on the Navbar, and you will see the public score sheets, you can click on any score sheet and comment on it also rate the score sheet.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>


                        <ul id="account">
                            <li>
                                <h2>Account</h2>
                            </li>
                            <li>
                                <a href="#0"><span>How do I change my password?</span></a>
                                <div>
                                    <div>
                                        <p>First, go to NavBar and click on icon, and then click login, the web will direct you to a
                                            login page. Second, click forgot password, the page will direct you enter email address
                                            so and so, you will reveive temporary password, and then you can log in to your account,
								and change your password through the settings.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#0"><span>How do I delete my account?</span></a>
                                <div>
                                    <div>
                                        <p>Admin users can delete account on the admin page.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#0"><span>How do I change my account settings?</span></a>
                                <div>
                                    <div>
                                        <p>First go to nav bar and click on icon, and then it will show you a drop down menu, you
								can click on settings to change the settings of your account.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#0"><span>I forgot my password. How do I reset it?</span></a>
                                <div>
                                    <div>
                                        <p>First, go to NavBar and click on icon, and then click login, the web will direct you to a
                                            login page. Second, click forgot password, the page will direct you enter email address
                                            so and so, you will reveive temporary password, and then you can log in to your account.
							        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>



                        <a href="#0" >Close</a>

                        <div aria-hidden="true"></div>
                    </div>
                </div>
                <script src="util.js"></script>
                <script src="main.js"></script>
            </div>

        );
    }
}

export default HelpFQA;





