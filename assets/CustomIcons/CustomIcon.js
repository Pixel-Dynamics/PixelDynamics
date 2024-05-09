export function PortfolioIcon({color, darkColor, className}) {
    return (
        <svg className={className} viewBox="0 0 19 14"  xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1671_28)">
                <path d="M18.5 0H0.5V6.29685H18.5V0Z" fill={color}/>
                <path d="M18.5 10.5H0.5V15.1667H18.5V10.5Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_1671_28">
                    <rect className={className} fill={darkColor} transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export function ServicesIcon({ color, darkColor, className }) {
    return (
        <svg className={className} viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1671_34)">
                <path d="M8.4056 0H0.5V7.9056H8.4056V0Z" fill={color} />
                <path d="M8.4056 10.0942H0.5V17.9998H8.4056V10.0942Z" fill={color} />
                <path d="M18.5001 10.0942H10.5945V17.9998H18.5001V10.0942Z" fill={color} />
                <path d="M18.5001 0H10.5945V7.9056H18.5001V0Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_1671_34">
                    <rect className={className} fill={darkColor} transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export function TeamIcon({ color, darkColor, className }) {
    return (
        <svg className={className} viewBox="0 0 19 18"  xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1671_40)">
                <path d="M18.5001 10.0942H10.5945V17.9998H18.5001V10.0942Z" fill={color}/>
                <path d="M14.5473 7.9056C16.7304 7.9056 18.5001 6.13587 18.5001 3.9528C18.5001 1.76973 16.7304 0 14.5473 0C12.3642 0 10.5945 1.76973 10.5945 3.9528C10.5945 6.13587 12.3642 7.9056 14.5473 7.9056Z" fill={color}/>
                <path d="M8.4056 10.0942H0.5V17.9998H8.4056V10.0942Z" fill={color}/>
                <path d="M4.4528 7.9056C6.63587 7.9056 8.4056 6.13587 8.4056 3.9528C8.4056 1.76973 6.63587 0 4.4528 0C2.26973 0 0.5 1.76973 0.5 3.9528C0.5 6.13587 2.26973 7.9056 4.4528 7.9056Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_1671_40">
                    <rect className={className} fill={darkColor} transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>

    )
}

export function TermsIcon({ color, darkColor, className }) {
    return (
        <svg className={className} viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1673_84)">
                <path d="M0 0V18H18V0H0ZM10.08 14.4H7.92V6.5916H10.08V14.4ZM10.08 5.472H7.92V3.6H10.08V5.472Z" fill={darkColor} />
            </g>
            <defs>
                <clipPath id="clip0_1673_84">
                    <rect width="18" height="18" fill={color} />
                </clipPath>
            </defs>
        </svg>

    )
}

export function BlogIcon({ color, darkColor, className }) {
    return (
        <svg className={className} viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1673_120)">
                <path d="M0 0V18H18V0H0ZM10.44 13.7034H3.96V11.9034H10.44V13.7034ZM10.44 9.9H3.96V8.1H10.44V9.9ZM14.04 6.0966H3.96V4.2966H14.04V6.0966Z" fill={darkColor}/>
            </g>
            <defs>
                <clipPath id="clip0_1673_120">
                    <rect className={className} fill={color } />
                </clipPath>
            </defs>
        </svg>

    )
}


export function ContactIcon({ color, darkColor, className }) {
    return (
        <svg className={className} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1671_21)">
                <path d="M18.5 0V0.862482L9.4928 7.76234L0.5 0.873982V0H18.5Z" fill={color}/>
                <path d="M9.4928 10.4033L18.5 3.50342V15.9998H0.5V3.51492L9.4928 10.4033Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_1671_21">
                    <rect className={className} fill={darkColor} transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>

    )
}

export function FacebookIcon({  className }) {
    return (
        <svg className={className} viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0201 3.96021H13.8201C14.0188 3.96021 14.1801 3.79893 14.1801 3.60021V1.17489C14.1801 0.986255 14.035 0.829295 13.8471 0.815975C13.2743 0.775295 12.1554 0.720215 11.3508 0.720215C9.14007 0.720215 7.70007 2.04501 7.70007 4.45269V6.84021H5.18007C4.98135 6.84021 4.82007 7.00149 4.82007 7.20021V9.72021C4.82007 9.91893 4.98135 10.0802 5.18007 10.0802H7.70007V16.9202C7.70007 17.1189 7.86135 17.2802 8.06007 17.2802H10.5801C10.7788 17.2802 10.9401 17.1189 10.9401 16.9202V10.0802H13.54C13.7236 10.0802 13.8777 9.94234 13.8978 9.75981L14.1779 7.23981C14.2017 7.02669 14.0346 6.84021 13.8201 6.84021H10.9401V5.04021C10.9401 4.44369 11.4235 3.96021 12.0201 3.96021Z" fill="#D9D9D9"/>
        </svg>

    )
}

export function LinkedinIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1671_54)">
                <path d="M0.5 5.25H4.25V18H0.5V5.25ZM2.36 3.75H2.3375C1.2275 3.75 0.5 2.9175 0.5 1.875C0.5 0.8325 1.2425 0 2.3825 0C3.5225 0 4.2275 0.81 4.25 1.875C4.25 2.9175 3.5225 3.75 2.36 3.75ZM18.5 18H14.75V11.175C14.75 9.525 13.8275 8.4 12.3575 8.4C11.2325 8.4 10.625 9.1575 10.325 9.8925C10.22 10.155 10.25 10.8825 10.25 11.25V18H6.5V5.25H10.25V7.215C10.79 6.375 11.6375 5.25 13.805 5.25C16.49 5.25 18.5 6.9375 18.5 10.7025V18Z" fill="#CCCCCC"/>
            </g>
            <defs>
                <clipPath id="clip0_1671_54">
                    <rect className={className} fill="white" transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>

    )
}

export function InstagramIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 19 18"  xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1671_56)">
                <path d="M13.289 18H5.71103C2.79056 18 0.5 15.7094 0.5 12.789V5.21103C0.5 2.29056 2.79056 0 5.71103 0H13.289C16.2094 0 18.5 2.29056 18.5 5.21103V12.789C18.5 15.7094 16.2094 18 13.289 18ZM5.71103 1.58049C3.67625 1.58049 2.08049 3.17625 2.08049 5.21103V12.789C2.08049 14.8238 3.67625 16.4195 5.71103 16.4195H13.289C15.3238 16.4195 16.9195 14.8238 16.9195 12.789V5.21103C16.9195 3.17625 15.3238 1.58049 13.289 1.58049H5.71103Z" fill="#D9D9D9"/>
                <path d="M13.9188 4.85575C14.4206 4.85575 14.8274 4.44896 14.8274 3.94716C14.8274 3.44536 14.4206 3.03857 13.9188 3.03857C13.417 3.03857 13.0103 3.44536 13.0103 3.94716C13.0103 4.44896 13.417 4.85575 13.9188 4.85575Z" fill="#D9D9D9"/>
                <path d="M9.4982 13.5794C6.97477 13.5794 4.9209 11.5255 4.9209 9.00211C4.9209 6.47868 6.97477 4.4248 9.4982 4.4248C12.0216 4.4248 14.0755 6.47868 14.0755 9.00211C14.0755 11.5255 12.0216 13.5794 9.4982 13.5794ZM9.4982 6.00147C7.84518 6.00147 6.49757 7.34909 6.49757 9.00211C6.49757 10.6551 7.84518 12.0027 9.4982 12.0027C11.1512 12.0027 12.4988 10.6551 12.4988 9.00211C12.4988 7.34909 11.1512 6.00147 9.4982 6.00147Z" fill="#D9D9D9"/>
            </g>
            <defs>
                <clipPath id="clip0_1671_56">
                    <rect className={className} fill="white" transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>

    )
}

export function TwitterIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1671_61)">
                <path d="M18.5226 3.75728C17.8574 4.0526 17.1445 4.25088 16.3949 4.34088C17.1599 3.88244 17.7478 3.15682 18.0234 2.29338C17.309 2.71666 16.5145 3.02463 15.6721 3.19057C14.9971 2.47057 14.0353 2.02197 12.9707 2.02197C10.926 2.02197 9.26807 3.67853 9.26807 5.72322C9.26807 6.01291 9.30182 6.29557 9.3651 6.56697C6.28822 6.41228 3.5615 4.93853 1.73479 2.69838C1.41557 3.24682 1.23416 3.88244 1.23416 4.56025C1.23416 5.84416 1.88666 6.9776 2.88088 7.64275C2.27338 7.62307 1.70244 7.45572 1.20322 7.17869C1.20322 7.19416 1.20322 7.20963 1.20322 7.2251C1.20322 9.01947 2.4801 10.5143 4.17182 10.856C3.86244 10.9404 3.53479 10.9854 3.19729 10.9854C2.95822 10.9854 2.72619 10.9629 2.49979 10.9179C2.97229 12.3874 4.33916 13.4604 5.95775 13.4899C4.69213 14.4828 3.09604 15.0734 1.36072 15.0734C1.06119 15.0734 0.767285 15.0565 0.479004 15.0213C2.11588 16.0732 4.06213 16.6849 6.15322 16.6849C12.9623 16.6849 16.686 11.0445 16.686 6.15353C16.686 5.99322 16.6818 5.8315 16.6762 5.674C17.399 5.15228 18.0262 4.49978 18.5226 3.75728Z" fill="#D9D9D9"/>
            </g>
            <defs>
                <clipPath id="clip0_1671_61">
                    <rect className={className} fill="white" transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>

    )
}