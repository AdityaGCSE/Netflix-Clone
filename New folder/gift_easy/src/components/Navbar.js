import React from 'react'
import './Navbar.css';
export default function Navbar() {
    return (
        <>
            <header className="Navbarclass">
                <nav class="navbar navbar-expand-sm bg-light navbar-dark fixed-top" >
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            <img src="GiftEasy.jpeg" alt="Logo" style={{ width: '200px' }} />
                        </a>
                        <form class="navbar-form navbar-left" action="/action_page.php">
                            <div class="input-group" id="searchGift">
                                <input type="text" class="form-control" list="giftlistOptions" id="giftlist" placeholder="Search for Gifts" name="search" />
                                <datalist id="giftlistOptions">
                                    <option value="flower" />
                                    <option value="Cake" />
                                    <option value="plant" />
                                    <option value="Chocolate" />
                                    <option value="decorative" />
                                    <option value="special day gift" />
                                </datalist>
                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <form class="navbar-form navbar-left" action="/action_pag.php">
                        <div class="input-group" id="chooseCity">
                            <span class="input-group-addon"><i class=" bi bi-geo-alt"></i></span>
                            <input type="text" class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Enter Delivery Location" name="city"/>
                            <datalist id="datalistOptions">
                                <option value="Kolkata" />
                                <option value="Delhi" />
                                <option value="Mumbai" />
                                <option value="Chennai" />
                                <option value="Bangalore" />
                                <option value="Hydrabad" />
                            </datalist>
                            <button class="btn btn-default" id="go" type="submit">Go</button>
                        </div>
                        </form>
                        <form class="navbar-form navbar-left" action="/action_pa.php">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="/"><span class="bi bi-clock"></span> Need Today? </a> <span className="me-4"></span></li>
                            <li><a href="/"><span class="bi bi-cart"></span> Cart </a> <span className="me-4"></span></li>
                            <li ><a href="/"><span class="bi bi-person-circle"></span> My Profile </a> <span className="me-2"></span></li>
                        </ul>
                        </form>
                    </div>
                </nav>
            </header>
        </>
    )
}
