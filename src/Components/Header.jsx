import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
        <header>
            <Nav
                activeKey="/"

            >
                {/* este es el apartado donde muestra el menue seccion1 */}

                <Nav.Item>
                    <Nav.Link>
                        {/*este es el apartado donde nos lleva al darle click a section1*/}
                        <NavLink to="/section1">
                            Autos
                        </NavLink>
                    </Nav.Link>
                </Nav.Item>

                {/* este es el apartado donde muestra el menue seccion2 */}
                <Nav.Item>
                    <Nav.Link>
                        {/**/}
                        {/*este es el apartando donde si selecionamos pagina2 nos llevara a 
            section2*/}
                        <NavLink to="/section2">Repuestos</NavLink>
                    </Nav.Link>
                </Nav.Item>


            </Nav>
        </header>
    )
}