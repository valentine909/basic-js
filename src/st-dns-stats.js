/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    const DNS = {};
    for (let domain of domains) {
        domain = domain.split('.').reverse();
        let record = '';
        for (let subDomain of domain) {
            record += "." + subDomain;
            if (!(record in DNS)) DNS[record] = 1;
            else DNS[record]++;
        }
    }
    return DNS;
}