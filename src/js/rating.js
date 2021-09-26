import refs from "../index"

export default function getRating() {
    if (refs.rating.textContent >= 7) {
        console.log(refs.rating.textContent);
       return refs.rating.classlist.add('green');
    } else if (refs.rating.textContent > 5) {
        return refs.rating.classlist.add('orange');
    } else {
        return refs.rating.classlist.add('red');
    }
}