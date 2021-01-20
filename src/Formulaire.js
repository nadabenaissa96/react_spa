import React, { Component } from "react";
class Formulaire extends Component {
    render() {
        return (
            <div>
                <h2>Informations Personnelles</h2>
                <form >
                    <fieldset>
                        <label>
                            <p>Nom</p>
                            <input name="nom" />

                        </label>
                        <label>
                            <p>Prénom</p>
                            <input name="prenom" />

                        </label>
                        <label>
                            <p>Adresse email</p>
                            <input name="email" />

                        </label>
                        <label>
                            <p>Numéro Téléphone</p>
                            <input name="telephone" />

                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default Formulaire;