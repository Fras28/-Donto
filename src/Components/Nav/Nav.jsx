import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Loguito from "../assets/casaMonteLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { asyncSearchBar, SearchProducts } from "../redux/slice";

export const Nav = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  let copyallProducts = useSelector((state) => state.allData);

  const handleChange = (e) => {
    //setError(false);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSearchBar(search));

    setSearch("");
  };

  const handleEnter = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    dispatch(asyncSearchBar(search));
    setSearch("");
  };

  return (
    <div className="contNav">
      <div>
        <NavLink to="/">
          <img className="logoCM" src={Loguito} alt="" />
        </NavLink>
      </div>
      <div className="section2">
          <NavLink to="/">

          <button className="btnBag">
          <svg width="30" height="30" viewBox="0 0 474 484" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M464.52 200C419.275 123.766 310.253 112.938 247.467 58.3604C243.154 53.9333 236.113 53.7353 231.56 57.9125C216.628 73.4431 201.696 88.7511 187.877 105.027C188.398 97.1105 187.877 88.8245 187.877 80.3871C187.877 64.3351 188.549 47.9085 187.278 31.9285C185.263 6.76713 171.002 -2.04488 146.809 0.720458C126.574 3.03299 87.5224 6.91832 76.101 26.5538C70.2 36.7101 73.5646 49.8511 75.1323 60.8245C76.7626 78.2618 81.0178 95.3511 87.752 111.522C88.3562 112.85 89.6843 113.704 91.1479 113.704C92.6115 113.704 93.9396 112.85 94.5438 111.522C101.039 90.6151 97.2312 70.3085 100.294 49.2511C102.158 36.5585 112.913 36.4074 123.887 33.5685C130.382 31.9278 146.288 26.0997 153.751 28.3393C161.22 30.5789 159.574 32.5945 159.876 42.6779C160.173 52.7561 159.876 63.8086 160.251 74.3339C160.251 91.2086 156.444 110.173 164.73 125.407C166.308 128.584 169.439 130.694 172.975 130.97C176.512 131.246 179.928 129.647 181.98 126.751C181.98 126.303 182.428 125.855 182.652 125.48V125.485C202.204 111.745 221.048 97.0161 239.1 81.3547C262.694 102.86 291.366 115.401 319.294 130.86C351.966 148.943 383.106 169.667 412.403 192.833C424.028 203.005 436.991 211.547 450.93 218.219C462.357 223.146 470.123 209.484 464.518 200L464.52 200Z" fill="white"/>
<path d="M53.9333 218.147C63.1937 210.678 72.4493 203.215 81.4853 195.746C96.4173 182.829 113.069 169.912 123.073 152.366C124.391 149.397 124.058 145.954 122.193 143.293C120.329 140.631 117.204 139.147 113.964 139.371C87.8279 144.97 63.7866 162.516 41.7613 177.226C23.0946 189.694 -1.99342 199.627 0.547915 224.939C1.06876 230.392 6.00098 233.152 10.1782 235.319C16.6001 238.605 35.4902 231.439 41.6102 227.85C45.9227 224.882 50.0373 221.637 53.9331 218.147L53.9333 218.147Z" fill="white"/>
<path d="M193.787 290.787C162.355 304.527 177.88 367.766 181.615 392.11C183.334 403.084 190.797 430.636 187.964 439.746C191.745 450.844 187.292 453.907 174.6 448.928H160.933C133.141 447.917 105.381 451.574 78.8024 459.756C75.8909 460.803 77.2347 464.907 79.8493 465.282H79.8441C93.167 466.673 106.547 467.35 119.943 467.298C141.672 467.745 168.697 473.87 189.828 470.36C195.875 469.313 200.281 470.36 205.432 465.657C222.38 449.605 210.213 405.25 207.745 385.84C204.76 362.47 195.349 323.345 224.843 316.7C248.437 311.325 262.698 325.21 261.578 346.564C259.265 390.318 248.214 428.7 256.052 473.048C258.963 489.324 284.651 486.037 281.588 469.839C274.119 431.985 280.171 395.995 285.916 358.662C287.932 345.594 296.442 321.329 287.557 308.115C274.354 288.99 213.197 282.271 193.786 290.787L193.787 290.787Z" fill="white"/>
<path d="M461.174 363.219C461.174 320.107 462.56 278.713 444.782 237.696C439.581 225.594 418.767 231.343 420.242 243.45C423.019 270.797 429.957 297.023 430.386 324.593C430.822 354.029 427.785 383.842 434.027 412.982C435.153 418.136 447.292 442.866 445.907 446.906C442.266 458.414 418.331 450.492 408.188 450.117H408.194C373.633 448.053 338.907 451.086 305.524 459.081C303.709 459.868 302.711 461.593 303.074 463.319C303.431 465.044 305.064 466.357 307.084 466.55C349.225 467.519 390.241 466.55 432.389 470.881C450.685 472.898 468.983 474.316 473.489 455.266C475.745 445.63 469.933 436.514 467.592 427.096V427.102C462.674 406.082 460.521 384.651 461.174 363.219L461.174 363.219Z" fill="white"/>
<path d="M130.547 398.454C132.021 396.266 131.817 393.355 130.052 391.396C128.286 389.433 125.411 388.928 123.083 390.167C102.214 402.808 82.895 417.844 65.515 434.964C66.5567 425.642 67.1036 416.271 67.1557 406.891C74.2808 400.407 81.7544 394.323 89.5571 388.672C97.6196 382.771 110.088 378.146 115.39 369.407C116.265 368.1 116.385 366.428 115.713 365.006C115.041 363.584 113.672 362.621 112.104 362.464C101.427 362.464 91.8693 370.678 83.8066 376.948C77.8744 381.646 72.3326 386.818 67.2333 392.407C67.2333 382.85 66.2645 373.142 65.3688 363.438C83.9621 351.193 103.077 339.542 120.546 326.104L120.541 326.099C122.999 324.636 123.801 321.464 122.333 319.011C120.869 316.552 117.697 315.75 115.244 317.214C96.5934 326.693 79.3121 338.651 63.8694 352.755C62.7496 342.823 61.4788 332.895 60.0621 322.891C78.8074 308.782 99.4888 296.907 116.141 280.927C119.349 277.865 115.542 272.339 111.511 273.458C90.6772 280.927 73.2078 296.38 58.1251 312.36C57.0783 305.641 56.1096 298.922 55.0626 292.349V292.354C60.0262 289.141 64.7918 285.625 69.3226 281.823C76.4164 276.896 84.2546 273.537 91.1973 268.386C92.7754 267.136 93.4525 265.063 92.9161 263.125C92.3796 261.183 90.7338 259.756 88.7338 259.5C78.6505 259.307 68.8845 263.026 61.4832 269.875C58.3634 272.422 55.5144 275.271 52.9676 278.391C51.6238 269.281 50.353 260.323 49.3113 251.807C48.9363 248.374 44.3061 249.343 43.7853 251.807C36.7645 290.556 40.202 330.208 42.0665 369.333C43.7072 403.907 40.0509 438.177 40.7957 472.672C40.7957 480.141 52.5926 483.276 55.3583 475.88C58.8895 466.193 61.5146 456.192 63.1969 446.016C89.4729 436.428 112.724 420.011 130.546 398.454L130.547 398.454Z" fill="white"/>
</svg>

          </button>
          
          </NavLink>
        <form className="formNav" onSubmit={handleSubmit}>
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input"
            placeholder="Que te gustaria comer?"
            required=""
            type="text"
            name="text"
            autofocus
            value={search}
            onChange={handleChange}
            autoComplete="off"
          />
          <button className="reset" type="reset" onKeyDown={handleEnter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
        <NavLink to="/Bag">
          <button className="btnBag">
          <svg width="30" height="30" viewBox="0 0 583 673" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M246.867 0.332837C185.84 0.332837 134.867 47.7342 134.867 107.432V149.666H102.897C93.5848 150.619 85.2987 158.02 83.2987 167.166L0.929357 540.5C-2.00291 553.578 9.46054 567.844 22.8613 567.802H265.528C289.507 628.953 349.159 672.333 418.595 672.333C509.053 672.333 582.861 598.521 582.861 508.066C582.861 428.274 525.497 361.493 449.861 346.826L410.429 167.16C408.216 157.295 398.601 149.629 388.497 149.659H358.861V107.425C358.861 47.7222 307.883 0.326172 246.861 0.326172L246.867 0.332837ZM246.867 45.1355C285.121 45.1355 314.069 73.1248 314.069 107.438V149.673H179.669V107.438C179.669 73.1262 208.617 45.1355 246.872 45.1355H246.867ZM123.2 194.469H134.867V201.938C134.7 213.771 145.429 224.656 157.268 224.656C169.101 224.656 179.836 213.771 179.669 201.938V194.469H314.069V201.938C313.903 213.771 324.632 224.656 336.471 224.656C348.304 224.656 359.039 213.771 358.872 201.938V194.469H370.539L403.675 344.496C320.153 352.084 254.341 422.632 254.341 508.069C254.341 513.095 254.597 518.084 255.039 523.001H50.8793L123.2 194.469ZM418.6 388.602C484.845 388.602 538.069 441.826 538.069 508.072C538.069 574.317 484.845 627.541 418.6 627.541C352.355 627.541 299.131 574.317 299.131 508.072C299.131 441.826 352.355 388.602 418.6 388.602V388.602ZM418.366 440.405C406.558 440.525 395.954 451.467 396.199 463.269V485.67H373.798C373.022 485.597 372.24 485.597 371.464 485.67C359.735 486.285 349.615 497.509 350.23 509.238C350.839 520.967 362.068 531.082 373.798 530.473H396.199V552.874C396.032 564.708 406.762 575.593 418.6 575.593C430.434 575.593 441.168 564.707 441.002 552.874V530.473H463.403C475.236 530.64 486.122 519.91 486.122 508.072C486.122 496.238 475.236 485.504 463.403 485.67H441.002V463.269C441.252 451.31 430.33 440.274 418.366 440.405Z" fill="white"/>
</svg>


          </button>
        </NavLink>
      </div>
    </div>
  );
};
