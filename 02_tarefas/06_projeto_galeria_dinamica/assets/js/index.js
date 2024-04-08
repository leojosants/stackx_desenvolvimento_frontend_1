const global = {
    preloaderPage: document.querySelector(`[data-js-preloader="preloader"]`),
    imagesContainer: document.querySelector(`[data-js-container="images"]`),
    addImageButton: document.querySelector(`[data-js-button="add-image"]`),
    messageGallery: document.querySelector(`[data-js-message="message"]`),
    uploadInput: document.querySelector(`[data-js-input="upload"]`),
    loaderPage: document.querySelector(`[data-js-loader="loader"]`),
    structureArray: structureArray = [],
    localStorageKeyName: `images`,
    localStorageImages: null,
};

const createElementFN = (tagName) => {
    return document.createElement(tagName);
};

const setAttributeFN = (element, attribute, value) => {
    element.setAttribute(attribute, value);
};

const removeAttributeFN = (element, attribute) => {
    element.removeAttribute(attribute);
};

const appendChildFN = (parentElement, child) => {
    parentElement.appendChild(child);
};

const addTextContent = (element, text) => {
    element.textContent = text;
};

const removeClass = (element, className) => {
    element.classList.remove(className);
};

const instanceateNewFileReader = () => {
    return new FileReader();
};

const instanceateNewImage = () => {
    return new Image();
};

const compressImage = (result, quality) => {
    return new Promise((resolve) => {
        const image = instanceateNewImage();

        image.onload = () => {
            const canvas = createElementFN(`canvas`);
            const contextCanvas = canvas.getContext(`2d`);
            const maxWidth = 600;

            let width = image.width;
            let height = image.height;

            if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;

            contextCanvas.drawImage(image, 0, 0, width, height);

            canvas.toBlob((blob) => {
                const compressedReader = instanceateNewFileReader();

                compressedReader.onload = () => {
                    console.log(`Tamanho comprimido:`, blob.size);
                    resolve({
                        compressedReader: compressedReader.result,
                        blobSize: blob.size,
                    });
                };
                compressedReader.readAsDataURL(blob);
            },
                `image/jpeg`,
                quality
            );
        };

        image.src = result;
    });
};

const getDataLocalStorage = () => {
    return JSON.parse(localStorage.getItem(global.localStorageKeyName));
};

const setDataLocalStorage = () => {
    localStorage.setItem(global.localStorageKeyName, JSON.stringify(global.structureArray));
};

const renderImage = () => {
    if (global.localStorageImages !== null) {

        global.structureArray = getDataLocalStorage();

        global.localStorageImages.length > 0 ? global.messageGallery.style.display = 'none' : ``;

        const elementsHTML = {
            div: `div`, img: `img`, src: `src`, alt: `alt`, span: `span`, button: `button`, title: `title`, 
        };

        const attributesHTML = {
            dataset: {
                dataJsStructureTimestamp: `data-js-structure-timestamp`,
                dataJsButton:`data-js-button`,
            },
            style: `style`,
        };

        const stylesCSS = [`font-size: 0.8em; color: gray; letterSpacing: 1px;`];

        global.structureArray.forEach((data) => {
            const baseStructure = createElementFN(elementsHTML.div);
            setAttributeFN(baseStructure, attributesHTML.dataset.dataJsStructureTimestamp, data.timestamp);

            const image = createElementFN(elementsHTML.img);
            setAttributeFN(image, elementsHTML.src, data.src);
            setAttributeFN(image, elementsHTML.alt, `imagem`);

            const spanRef = createElementFN(elementsHTML.span);
            addTextContent(spanRef, `ref: ${data.timestamp}`);
            setAttributeFN(spanRef, attributesHTML.style, stylesCSS[0]);

            const spanOriginalSize = createElementFN(elementsHTML.span);
            addTextContent(spanOriginalSize, `tamanho original: ${data.sizeBeforeCompressing}`);
            setAttributeFN(spanOriginalSize, attributesHTML.style, stylesCSS[0]);

            const spanModifiedSize = createElementFN(elementsHTML.span);
            addTextContent(spanModifiedSize, `tamanho modificado: ${data.sizeAfterCompressing}`);
            setAttributeFN(spanModifiedSize, attributesHTML.style, stylesCSS[0]);

            const deleteButton = createElementFN(elementsHTML.button);
            setAttributeFN(deleteButton, attributesHTML.dataset.dataJsButton, `remove-image`);
            setAttributeFN(deleteButton, elementsHTML.title, `Click para deletar`);
            addTextContent(deleteButton, `Deletar`);

            appendChildFN(baseStructure, image);
            appendChildFN(baseStructure, spanRef);
            appendChildFN(baseStructure, spanOriginalSize);
            appendChildFN(baseStructure, spanModifiedSize);
            appendChildFN(baseStructure, deleteButton);
            appendChildFN(global.imagesContainer, baseStructure);
        });
    }
};

const preloaderAndLoader = () => {
    setTimeout(() => {
        removeClass(global.preloaderPage, `c-body__c-preloader`);
        removeClass(global.loaderPage, `c-body__c-loader`);
    }, 1280);
};

const pageRelod = () => {
    location.reload();
};

global.addImageButton.addEventListener(`click`, () => {
    const fileList = global.uploadInput.files;

    if (fileList.length === 0) {
        pageRelod();
    }

    const file = fileList[0];
    const fileSize = fileList[0].size;

    const fileReader = instanceateNewFileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = async () => {
        const result = fileReader.result;
        const quality = 0.7;
        const { compressedReader, blobSize } = await compressImage(result, quality);

        const objectImage = {
            src: compressedReader,
            timestamp: Date.now(),
            sizeBeforeCompressing: fileSize,
            sizeAfterCompressing: blobSize,
        };

        global.structureArray.unshift(objectImage);
        setDataLocalStorage(global.localStorageKeyName, global.structureArray);
        pageRelod();
    };
});

global.uploadInput.addEventListener('change', () => {
    const fileListLength = global.uploadInput.files.length;
    const disabled = global.addImageButton;

    if (fileListLength > 0) {
        global.uploadInput.style.color = `black`;
        if (disabled.getAttribute(`disabled`) === `true`) {
            removeAttributeFN(disabled, `disabled`);
            removeAttributeFN(disabled, `style`)
        }
    }
});

window.document.addEventListener('click', (event) => {
    const eventTarget = event.target;

    const isRemoveImageButton = eventTarget.dataset.jsButton === `remove-image`;
    if (!isRemoveImageButton) return;

    const parentElement = eventTarget.parentElement;
    const parentElementTimestamp = Number(parentElement.dataset.jsStructureTimestamp);

    if (isRemoveImageButton) {
        const wantToDelete = confirm('Deletar imagem?');
        if (!wantToDelete) return;

        global.structureArray.forEach((data) => {
            if (data.timestamp === parentElementTimestamp) {
                global.structureArray = global.structureArray.filter((data) => data.timestamp !== parentElementTimestamp);
            }
            setDataLocalStorage(global.localStorageKeyName, global.structureArray);
            parentElement.remove();
        });
    }

    pageRelod();
});

window.window.addEventListener(`DOMContentLoaded`, () => {
    global.localStorageImages = getDataLocalStorage();
    renderImage();
    preloaderAndLoader();
});