const items = {
    iphone: {
        name: 'iPhone 13',
        desc: '',
        specs: 'Color: Midnight',
        img: 'iPhone.jpg',
        tags: [
            'Tech'
        ],
        price: '400 - $700',
        pColor: 525,
        links: {
            apple: {
                name: 'Apple',
                address: 'https://www.apple.com/shop/buy-iphone/iphone-13',
                price: '$699'
            },
            amazon: {
                name: 'Amazon',
                address: 'https://www.amazon.com/dp/B09LNW3CY2/ref=twister_B09LP9P1FM?_encoding=UTF8&th=1',
                price: '$560'
            }
        }
    },
    steamDeck: {
        name: 'Steam Deck',
        desc: 'A portable handheld console, like the Nintendo Switch, but it can play PC games.',
        specs: 'Storage Space: 64GB',
        img: 'steamDeck.jpg',
        tags: [
            'Tech'
        ],
        price: 400,
        links: {
            steamDeck: {
                name: 'SteamDeck',
                address: 'https://www.steamdeck.com/en/',
                price: '$399'
            },
            amazon: {
                name: 'Amazon',
                address: 'https://a.co/d/4h4xDlM',
                price: '$475'
            }
        }
    },
    CPU: {
        name: 'Intel Core i7-9700K',
        desc: 'A computer CPU used to make things run faster and smoother.',
        img: 'CPU.png',
        tags: [
            'Tech'
        ],
        price: 314,
        links: {
            amazon: {
                name: 'Amazon',
                address: 'https://a.co/d/7dP2ppn',
                price: '$314'
            }
        }
    },
    joyCons: {
        name: 'Joy-Cons',
        desc: 'Controllers used to play on the Nintendo Switch.',
        img: 'joy-cons.jpg',
        tags: [
            'Tech'
        ],
        price: 80,
        links: {
            amazon: {
                name: 'Amazon',
                address: 'https://a.co/d/ag3WJ0L',
                price: '$80'
            }
        }
    },
    breadCatTee: {
        name: 'Bread Cat Tee',
        desc: 'A very cool shirt.',
        img: 'breadCatTee.webp',
        specs: 'Size: Large <br> Color: Black',
        tags: [
            'Clothing'
        ],
        price: 28,
        links: {
            amazon: {
                name: 'Cat Warehouse',
                address: 'https://www.catwarehouse.com/products/breadcat-tee-black?variant=41581729579198',
                price: '$28'
            }
        }
    },
    eddieCase: {
        name: 'Eddie iPhone XR case',
        desc: '',
        img: 'eddieCase.png',
        tags: [
            'Accessory'
        ],
        price: 11,
        links: {
            amazon: {
                name: 'Streamlabs',
                address: 'https://streamlabs.com/notdebread/merch/4806517',
                price: '$10.60'
            }
        }
    },
    eddieBeegSticker: {
        name: 'Eddie Beeg Sticker',
        desc: '',
        img: 'eddieBeegSticker.png',
        tags: [
            'Decor'
        ],
        price: 3,
        links: {
            amazon: {
                name: 'Streamlabs',
                address: 'https://streamlabs.com/notdebread/merch/3266686',
                price: '$3.40'
            }
        }
    },
    breadCatSticker: {
        name: 'Bread Cat Sticker',
        desc: 'A very cool sticker.',
        img: 'breadCatSticker.png',
        tags: [
            'Decor'
        ],
        price: '2.50',
        pColor: 2.5,
        links: {
            amazon: {
                name: 'Cat Warehouse',
                address: 'https://www.catwarehouse.com/collections/all/products/bread-cat-sticker',
                price: '$2.50'
            }
        }
    },
}

for(let item in items) {
    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item')
    itemDiv.innerHTML = `
    <div class="itemContent">
        <span class="itemName">${items[item].name}</span>
        <span>${items[item].desc}</span>
        <div class="itemTags" id="${item}Tags"></div>
        <div class="itemPrice" id="${item}Price">
            <span>$${items[item].price}</span>
        </div>
    </div>
    <div class="itemVignette"></div>
    `
    itemDiv.style.backgroundImage = `url(images/items/${items[item].img})`
    doge('itemContainer').appendChild(itemDiv)

    if(typeof items[item].price === 'number') {
        doge(`${item}Price`).style.backgroundColor = `hsl(${150 - items[item].price / 3}, 100%, 65%)`
    } else {
        doge(`${item}Price`).style.backgroundColor = `hsl(${150 - items[item].pColor / 3}, 100%, 65%)`
    }

    for(tag in items[item].tags) {
        const tagSpan = document.createElement('span')
        tagSpan.innerText = items[item].tags[tag]
        doge(`${item}Tags`).appendChild(tagSpan)
    }

    itemDiv.addEventListener('mouseup', () => {
        openMenu(items[item])
    })
}

// for(let i = 0; i < 75; i++) {
//     const colorBlock = document.createElement('div')
//     colorBlock.innerText = `hsl(${i * 4}, 100%, 65%)`
//     colorBlock.style.backgroundColor = `hsl(${i * 4}, 100%, 65%)`
//     if(i * 4 > 40 && i * 4 < 200) {
//         colorBlock.style.color = 'black'
//     }
//     document.body.appendChild(colorBlock)
// }

function openMenu(item) {
    doge('menuContainer').style.display = 'flex'
    doge('menuHeading').innerText = item.name
    if(item.desc && item.specs) {
        doge('menuDesc').innerHTML = `${item.desc}<br>${item.specs}`
    } else if(item.desc) {
        doge('menuDesc').innerHTML = item.desc
    } else if(item.specs) {
        doge('menuDesc').innerHTML = item.specs
    } else {
        doge('menuDesc').innerHTML = ''
    }

    doge('menuImg').style.backgroundImage = `url(images/items/${item.img})`

    doge('menuButtons').innerHTML = ''
    if(item.links) {
        for(let link in item.links) {
            const linkA = document.createElement('a')
            linkA.setAttribute('href', item.links[link].address)
            linkA.setAttribute('target','_blank')
            linkA.innerText = `${item.links[link].name} - ${item.links[link].price}`
            doge('menuButtons').appendChild(linkA)
        }
    }
}

function closeMenu() {
    doge('menuContainer').style.display = 'none'
}