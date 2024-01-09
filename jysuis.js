
export { Text, Circle, HStack, VStack, ZStack, Spacer, Body, Image, ScrollView}

// Define a Text function with background and foreground color modifiers
function Text(text) {
    const element = document.createElement('div');
    element.textContent = text;

    const textObj = {
        element: element,
        onClick: function (callback) {
            if (callback) {
                element.addEventListener('click', callback);
                element.style.cursor = 'pointer';
            }
            return textObj;
        },
        backgroundColor: function (color) {
            if (color) {
                element.style.backgroundColor = color;
            }
            return textObj;
        },
        foregroundColor: function (color) {
            if (color) {
                element.style.color = color;
            }
            return textObj;
        },
        fontSize: function (size) {
            if (size) {
                element.style.fontSize = size;
            }
            return textObj;
        },        
        fontFamily: function (fontName) {
            if (fontName) {
                element.style.fontFamily = fontName;
            }
            return textObj;
        },
    };

    // Center the text horizontally
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.margin = 'auto';

    return textObj;
}

// Define a Circle function
function Circle() {
    const element = document.createElement('div');
    element.style.width = '100px'; // Set a default size (adjust as needed)
    element.style.height = '100px'; // Set a default size (adjust as needed)
    element.style.borderRadius = '50%';
    element.style.backgroundColor = 'blue'; // You can set the default color here

    // Center the circle horizontally
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.margin = 'auto';

    const circleObj = {
        element: element,
        foregroundColor: function (color) {
            if (color) {
                element.style.backgroundColor = color;
            }
            return circleObj;
        },
        onClick: function (callback) {
            if (callback) {
                element.addEventListener('click', callback);
                element.style.cursor = 'pointer';
            }
            return circleObj;
        },
    };

    // Function to calculate and set the minimum dimension as the size
    const setCircleSize = () => {
        const containerWidth = element.parentElement.clientWidth;
        const containerHeight = element.parentElement.clientHeight;
        console.log('containerWidth', containerWidth, 'containerHeight', containerHeight);
        const minDimension = Math.min(containerWidth, containerHeight);
        element.style.width = containerWidth + 'px';
        element.style.height = containerWidth + 'px';
    };

    // Listen for container size changes and adjust the size accordingly
    const observer = new ResizeObserver(setCircleSize);
    //observer.observe(element);

    return circleObj;
}





// Define an HStack function
function HStack(...children) {
    const stackElement = document.createElement('div');
    stackElement.style.display = 'flex';
    stackElement.style.flexDirection = 'row';
    stackElement.style.justifyContent = 'space-between'; // Equal spacing between children

    children.forEach((child) => {
        if (child && child.element) {
            stackElement.appendChild(child.element);
        }
    });

    const stackObj = {
        element: stackElement,
    };

    return stackObj;
}

// Define a VStack function
function VStack(...children) {
    const stackElement = document.createElement('div');
    stackElement.style.display = 'flex';
    stackElement.style.flexDirection = 'column';
    stackElement.style.justifyContent = 'space-between'; // Center children vertically

    children.forEach((child) => {
        if (child && child.element) {
            stackElement.appendChild(child.element);
        }
    });

    const stackObj = {
        element: stackElement,
    };

    return stackObj;
}
/*
// Define a ZStack function
function ZStack(...children) {
    const stackElement = document.createElement('div');
    stackElement.style.position = 'relative';

    children.forEach((child) => {
        if (child && child.element) {
            child.element.style.position = 'absolute';
            child.element.style.top = '50%';
            child.element.style.left = '50%';
            child.element.style.transform = 'translate(-50%, -50%)';
            stackElement.appendChild(child.element);
        }
    });

    const stackObj = {
        element: stackElement,
    };

    return stackObj;
}
*/

function ZStack(...children) {
    const stackElement = document.createElement('div');
    stackElement.style.position = 'relative';

    // Track the maximum width and height of children
    let maxWidth = 0;
    let maxHeight = 0;

    children.forEach((child) => {
        if (child && child.element) {
            child.element.style.position = 'absolute';
            child.element.style.top = '50%';
            child.element.style.left = '50%';
            child.element.style.transform = 'translate(-50%, -50%)';

            // Calculate the maximum width and height
            const childWidth = child.element.clientWidth;
            const childHeight = child.element.clientHeight;

            if (childWidth > maxWidth) {
                maxWidth = childWidth;
            }
            if (childHeight > maxHeight) {
                maxHeight = childHeight;
            }

            stackElement.appendChild(child.element);
        }
    });

    // Set the stack's width and height based on the maximum dimensions of its children
    stackElement.style.width = maxWidth + 'px';
    stackElement.style.height = maxHeight + 'px';

    const stackObj = {
        element: stackElement,
    };

    return stackObj;
}



function Spacer() {
    const spacerElement = document.createElement('div');
    spacerElement.style.flex = 1; // Use flexGrow to create space

    const spacerObj = {
        element: spacerElement,
    };

    return spacerObj;
}

// Define a Body function
function Body(...children) {
    const bodyElement = document.createElement('div');
    bodyElement.style.display = 'flex';
    bodyElement.style.flexDirection = 'column';
    bodyElement.style.justifyContent = 'space-between'; // Center children vertically

    bodyElement.style.width = '100%';
    bodyElement.style.height = '100%';
    bodyElement.style.position = 'fixed';
    bodyElement.style.top = '0';
    bodyElement.style.left = '0';
    children.forEach((child) => {
        if (child && child.element) {
            bodyElement.appendChild(child.element);
        }
    });

    const bodyObj = {
        element: bodyElement,
    };

    document.body.appendChild(bodyObj.element);

    return bodyObj;
}


// Define an Image function
function Image(src) {
    const imgElement = document.createElement('img');
    imgElement.src = src;

    const imgObj = {
        element: imgElement,
        onClick: function (callback) {
            if (callback) {
                imgElement.addEventListener('click', callback);
                imgElement.style.cursor = 'pointer';
            }
            return imgObj;
        },
        width: function (width) {
            if (width) {
                imgElement.style.width = width;
            }
            return imgObj;
        },
        height: function (height) {
            if (height) {
                imgElement.style.height = height;
            }
            return imgObj;
        },
    };

    return imgObj;
}

// Define a ScrollView function
function ScrollView(...children) {
    const scrollViewElement = document.createElement('div');
    scrollViewElement.style.overflow = 'auto';
    scrollViewElement.style.height = '100%';

    const contentContainer = document.createElement('div');

    children.forEach((child) => {
        if (child && child.element) {
            contentContainer.appendChild(child.element);
        }
    });

    scrollViewElement.appendChild(contentContainer);

    // to hide the scrollbar
    scrollViewElement.classList.add('custom-scrollview');

    const scrollViewObj = {
        element: scrollViewElement,
        height: function (height) {
            if (height) {
                scrollViewElement.style.height = height;
            }
            return scrollViewObj;
        },
    };

    return scrollViewObj;
}