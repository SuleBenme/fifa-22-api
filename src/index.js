import {apiCall} from './utils.js';

/**
 * Search for a team by name
 * @param {string} query - The club's id
 * @param {string} platform - Gaming plarform
 * @return {Array} - Teams that match the query
 */
const getClubIdByName = async (query, platform) => apiCall('clubs/search', 'clubName='+query, platform);

/**
 * Find the members and their stats of a club
 * @param {string} clubId - The club's id
 * @param {string} platform - Gaming plarform
 * @return {Array} - Members of the club
 */
const getClubMembers = async (clubId, platform) => apiCall('members/stats', 'clubId='+clubId, platform);

/**
 * Find match history 
 * @param {string} clubId - The club's id
 * @param {string} platform - Gaming plarform
 * @return {Array} - Matches
 */
const getClubMatches = async (clubId, platform) => apiCall('clubs/matches', 'clubIds='+clubId, platform);

/**
 * Get the seasonal stats of club
 * @param {string} clubId - The club's id
 * @param {string} platform - Gaming plarform
 * @return {Object} - Season stats of the club
 */
const getSeasonalStats = async (clubId, platform) => apiCall('clubs/seasonalStats', 'clubIds='+clubId, platform);


export {getClubMatches, getClubIdByName, getClubMembers, getSeasonalStats}