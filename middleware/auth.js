const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    // Get token from the header
    const token = req.header('x-auth-token')

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied!' })
    }

    try {
        // verify the token
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        // Set user in payload to req.user
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' })
    }
}