/* FREECODECAMP TOGGLE RESTYLING
   Hides the original hamburger-menu and
   adds a floating action button instead */

// check / listen for document.readyState
if (document.readyState === "complete") {
  restyleToggle();
} else {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      restyleToggle();
    }
  }
}

function restyleToggle() {
  setTimeout(() => {

    // inject HTML & CSS
    $("body").append(`  <!-- freeCodeCamp toggle restyling -->
    <style>
      .test-suite {
        position: relative;
        z-index: 10;
      }
  
      .test-suite__toggle-bg {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: fixed;
        bottom: 16px;
        left: 16px;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        background-color: #3b3b4f;
        cursor: pointer;
      }
  
      .test-suite__toggle-logo {
        width: 24px;
        height: 24px;
      }
  
      .test-suite__text-bar {
        display: none;
        position: fixed;
        bottom: 30px;
        left: 64px;
        border-radius: 3px;
        padding: 1px 5px;
        font-size: 10px;
        font-family: "Roboto Mono", monospace;
        background-color: #3b3b4f;
        color: #dfdfe2;
      }
    </style>
  
    <div class='test-suite'>
      <div class='test-suite__toggle-bg'>
        <svg class='test-suite__toggle-logo' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          width="712" height="484" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 712 484">
          <defs>
            <path id="a1UGBK5Jf"
              d="M136.83 9.96C139.18 12.3 141.53 15.67 141.54 19.06C141.55 24.92 134.67 32.87 121.95 45.93C68.91 97 42.23 159.54 42.41 234.97C42.61 318.42 70.67 385.44 125.21 437.38C136.68 447.63 141.39 455.69 141.41 462.59C141.41 465.97 139.08 469.49 136.74 472.88C134.54 475.23 129.85 477.59 126.47 477.59C113.85 477.62 96.19 462.7 73.13 433.67C28.23 378.64 7.93 317.87 6.79 235.05C5.74 152.19 31.72 96 82.57 37.99C100.87 17.26 116.13 6.49 126.54 6.47C129.92 6.46 133.44 7.62 136.83 9.96Z" />
            <path id="a8LR3SBcZL"
              d="M415.42 249.9C395.49 244.81 477.27 148.19 331.92 32.51C331.92 32.51 350.99 93.1 254.83 228.31C158.62 363.47 297.61 443.99 297.61 443.99C297.61 443.99 232.38 409.23 308.21 285.47C321.78 263.02 339.54 242.69 361.59 196.93C361.59 196.93 381.11 224.48 370.92 284.21C355.68 374.47 437.01 348.64 438.27 349.9C466.68 383.35 414.74 442.14 411.58 443.99C408.43 445.79 559.91 352.87 452.29 213.03C444.92 220.4 435.34 255 415.42 249.9Z" />
            <path id="eYLbcOweH"
              d="M575.26 9.9C572.91 12.24 570.56 15.61 570.55 19C570.54 24.86 577.42 32.81 590.14 45.87C643.18 96.93 669.86 159.48 669.68 234.91C669.48 318.36 641.42 385.38 586.88 437.32C575.41 447.57 570.7 455.63 570.68 462.53C570.68 465.91 573.01 469.43 575.35 472.82C577.55 475.17 582.24 477.52 585.62 477.53C598.24 477.56 615.9 462.64 638.96 433.61C683.86 378.58 704.16 317.81 705.3 234.99C706.35 152.13 680.37 95.94 629.52 37.93C611.22 17.2 595.96 6.43 585.55 6.41C582.17 6.4 578.65 7.56 575.26 9.9Z" />
          </defs>
          <g>
            <g>
              <g>
                <use fill="#f5f6f7" fill-opacity="1" opacity="1" xlink:href="#a1UGBK5Jf" />
                <g>
                  <use fill-opacity="0" stroke="#f5f6f7" stroke-opacity="0" stroke-width="1" opacity="1"
                    xlink:href="#a1UGBK5Jf" />
                </g>
              </g>
              <g>
                <use fill="#f5f6f7" fill-opacity="1" opacity="1" xlink:href="#a8LR3SBcZL" />
                <g>
                  <use fill-opacity="0" stroke="#f5f6f7" stroke-opacity="0" stroke-width="1" opacity="1"
                    xlink:href="#a8LR3SBcZL" />
                </g>
              </g>
              <g>
                <use fill="#f5f6f7" fill-opacity="1" opacity="1" xlink:href="#eYLbcOweH" />
                <g>
                  <use fill-opacity="0" stroke="#f5f6f7" stroke-opacity="0" stroke-width="1" opacity="1"
                    xlink:href="#eYLbcOweH" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class='test-suite__text-bar'>freeCodeCamp TESTS</div>
    </div>
    `);

    // old toggle - manipulate styling
    document.querySelector("#fcc_test_suite_wrapper").shadowRoot.querySelector("#fcc_foldout_toggler_background").style.backgroundColor = "rgba(0,0,0,0)";
    document.querySelector("#fcc_test_suite_wrapper").shadowRoot.querySelector("#fcc_foldout_toggler").style.opacity = "0";
    document.querySelector("#fcc_test_suite_wrapper").shadowRoot.querySelector("#fcc_foldout_menu").insertAdjacentHTML("afterbegin", '<img class="test-suite__close-x" src="https://www.michaelschneider.io/misc/fcc/rwd/iconmonstr-x-mark-1.svg" alt="close tests" style="left: 12px; position: absolute; top: 13px; width: 16px;">');

    let toggle = document.querySelector("#fcc_test_suite_wrapper").shadowRoot.querySelector("#fcc_toggle");
    $(toggle).prop("checked", true);
    $(toggle).css("marginLeft", "-40px");

    // new toggle - show label on hover
    $(".test-suite__toggle-bg").mouseover(function () {
      $(".test-suite__text-bar").show();
    });
    $(".test-suite__toggle-bg").mouseleave(function () {
      $(".test-suite__text-bar").hide();
    });

    // checkbox - slide off screen, when menu is hidden
    function slideOutCheckbox() {
      if ($(toggle).css("marginLeft") === "-5px") {
        $(toggle).css("marginLeft", "-40px");
      } else {
        $(toggle).css("marginLeft", "-5px");
      }
    }

    $(toggle).click(() => {
      slideOutCheckbox();
    })

    // transparent checkbox - trigger with new toggle
    $(".test-suite__toggle-bg").click(() => {
      if ($(toggle).prop("checked") === false) {
        $(toggle).prop("checked", true);
        slideOutCheckbox();
      } else {
        $(toggle).prop("checked", false);
        slideOutCheckbox();
      }
    })

  }, 50); // timeout
}