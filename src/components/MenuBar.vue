<template>
    <div class="topnav active">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu active">

            <div class="collapse navbar-collapse active" id="topnav-menu-content">
                <ul class="navbar-nav active">
                    <li class="nav-item active">
                        <a class="nav-link dropdown-toggle arrow-none active" href="index.html" id="topnav-dashboard"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-home-circle icon"></i>
                            <span data-key="t-dashboard">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle arrow-none active" href="index.html" id="topnav-dashboard"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-cart icon"></i>
                            <span data-key="t-dashboard">POS</span>
                        </a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button">
                            <i class="bx bx-customize icon"></i>
                            <span data-key="t-apps">Inventory</span>
                            <div class="arrow-down"></div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="topnav-pages">
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-projects"
                                    role="button">
                                    <span data-key="t-projects">Category Management</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-projects">
                                    <router-link :to="{ name: 'category-index' }" class="dropdown-item" data-key="t-p-list">Category List</router-link>
                                    <router-link :to="{ name: 'category-create' }" class="dropdown-item" data-key="t-create-new">Create New</router-link>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button">
                            <i class="bx bx-layer icon"></i>
                            <span data-key="t-components">HRM</span>
                            <div class="arrow-down"></div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="topnav-components">
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map" role="button">
                                    <span data-key="t-maps">Employee</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-map">
                                    <a href="maps-google.html" class="dropdown-item" data-key="t-google">Employee List</a>
                                    <a href="maps-vector.html" class="dropdown-item" data-key="t-vector">Create New</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button">
                            <i class="bx bx-file icon"></i>
                            <span data-key="t-pages">CRM</span>
                            <div class="arrow-down"></div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="topnav-more">
                            <div class="dropdown">
                                <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-pricing"
                                    role="button">
                                    <span data-key="t-pricing">Customer</span>
                                    <div class="arrow-down"></div>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="topnav-pricing">
                                    <a href="pricing-basic.html" class="dropdown-item" data-key="t-basic">Customer List</a>
                                    <a href="pricing-table.html" class="dropdown-item" data-key="t-table">Create New</a>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>