import React, { Component } from "react";
class Formulaire extends Component {
    render() {
        return (
            <div>
                <h1>Informations Personnelles</h1>
                <form >
                   
                        <label>
                            <p>First Name</p>
                            <input
                                placeholder="First Name"
                                type="text"
                                name="firstName" />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input
                                placeholder="Last Name"
                                type="text"
                                name="lasttName" />
                        </label>
                    
                        <label>
                            <p>Email</p>
                            <input
                                placeholder="Email Address"
                                type="email"
                                name="email" />

                        </label>
                        <label>
                            <p>Telephone Number</p>
                            <input
                                placeholder="Telephone"
                                type="number"
                                name="telephone" />
                        </label>

                        <label>
                            <p>Password</p>
                            <input
                                placeholder="Password"
                                type="password"
                                name="password" />
                        </label>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default Formulaire;