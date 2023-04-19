const getOurGreatestNeeds = "SELECT * FROM our_greatest_needs";
const updateOurGreatestNeeds = "UPDATE our_greatest_needs SET name = $1, content = $2, usd_price = $3, kes_price = $4 WHERE id = $5";


module.exports = {
    getOurGreatestNeeds, updateOurGreatestNeeds
}