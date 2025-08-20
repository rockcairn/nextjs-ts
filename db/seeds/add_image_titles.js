/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('image_title').del();
  await knex('image_title').insert([
    {
      id: 1,
      keywords: 'new zealand',
      title: 'New Zealand, December 2007 - January 2008',
    },
    {
      id: 2,
      keywords: 'killarney',
      title: 'Killarney Provincial Park, May 2008',
    },
    {
      id: 3,
      keywords: 'watkins_glen',
      title: 'Watkins Glen and Robert H. Treman State Parks, July 2008',
    },
    {
      id: 4,
      keywords: 'point_pelee',
      title: 'Wheatly Prov. Park and Point Pelee Nat. Park, September 2008',
    },
    {
      id: 5,
      keywords: 'quebec_city',
      title: 'Quebec City, November 7-10, 2008',
    },
    {
      id: 6,
      keywords: 'calendar-2009',
      title: '2009 Rockcairn.com: New Zealand Edition',
    },
    {
      id: 7,
      keywords: 'mazatlan',
      title: 'Mazatlan, Mexico Trip Feb. 14 - 24, 2009',
    },
    {
      id: 8,
      keywords: 'peru',
      title: 'Lima-Cusco, Peru Trip Apr. 24 - May 7, 2009',
    },
    {
      id: 9,
      keywords: 'white_river',
      title: 'White River Canoe Trip, Ontario, July 17-23, 2009',
    },
    {
      id: 10,
      keywords: 'bruce_peninsula',
      title: 'Bruce Peninsula, Ontario, September 4-7, 2009',
    },
    {
      id: 11,
      keywords: 'calendar-2010',
      title: '2010 Rockcairn.com: Peru Edition',
    },
    {
      id: 12,
      keywords: 'vancouver',
      title: 'Vancouver British Columbia, May 6-9, 2010',
    },
    {
      id: 13,
      keywords: 'denver',
      title: 'Denver Colorado, May and September 2010',
    },
    {
      id: 14,
      keywords: 'killbear',
      title: 'Killbear Provencial Park, Ontario, September 2010',
    },
    {
      id: 15,
      keywords: 'new_york_city-2011',
      title: 'New York City, May 21-24, 2011',
    },
    { id: 16, keywords: 'alaska-2011', title: 'Alaska, July 9-20, 2011' },
    {
      id: 17,
      keywords: 'presquile',
      title: 'Presquile Provincial Park, July 28-31, 2011',
    },
    {
      id: 18,
      keywords: 'london',
      title: 'London Trip Nov. 27 - Dec. 03, 2002',
    },
    {
      id: 19,
      keywords: 'kingston',
      title: 'Kingston, Ontario Trip April 10-15, 2003',
    },
    {
      id: 20,
      keywords: 'new_york_city-jul-2003',
      title: 'New York City Trip July 18-21, 2003',
    },
    {
      id: 21,
      keywords: 'new_york_city-sept-2003',
      title: 'New York City Trip Sept. 10-16, 2003',
    },
    {
      id: 22,
      keywords: 'new_york_city-nov-2003',
      title: 'New York City Trip Nov. 26 - Dec. 1, 2003',
    },
    {
      id: 23,
      keywords: 'denver-dec-2003',
      title: 'Denver, Christmas Break Dec. 11 - Jan. 19, 2004',
    },
    {
      id: 24,
      keywords: 'new_york_city-feb-2004',
      title: 'New York City Trip Feb. 13-16, 2004',
    },
    {
      id: 25,
      keywords: 'new_york_city-apr-2004',
      title: 'New York City Trip Apr. 16-18, 2004',
    },
    {
      id: 26,
      keywords: 'new_york_city-may-2004',
      title: 'New York City Trip May 12-16, 2004',
    },
    {
      id: 27,
      keywords: 'cancun-may-2004',
      title: 'Cancun (Riviera Maya) Mexico Trip May 19-23, 2004',
    },
    {
      id: 28,
      keywords: 'cancun-jan-2006',
      title: 'Akumal, Mexico for New Years Dec. 28- Jan. 4, 2006',
    },
    {
      id: 29,
      keywords: 'denver-mar-2004',
      title: 'Denver, Spring Break Mar. 11-27, 2004',
    },
    {
      id: 30,
      keywords: 'pre_wedding',
      title: 'Wedding Preparation, Spring 2004',
    },
    {
      id: 31,
      keywords: 'wedding_shower',
      title: 'Personal Wedding Shower for Courtney Aug. 15, 2004',
    },
    {
      id: 32,
      keywords: 'wedding_rehearsal',
      title: 'Wedding Rehearsal Nov. 5, 2004',
    },
    { id: 33, keywords: 'wedding', title: 'Wedding Nov. 6, 2004' },
    {
      id: 34,
      keywords: 'honeymoon',
      title: 'New Mexico Honeymoon Trip Nov. 8-13, 2004',
    },
    {
      id: 35,
      keywords: 'santa_ana',
      title: 'Irvine/Orange County, CA Trip Apr. 14-19, 2005',
    },
    {
      id: 36,
      keywords: 'arches-moab',
      title: 'Arches/Moab, UT Trip May 19-23, 2005',
    },
    { id: 37, keywords: 'colorado-openspace', title: 'Open Space Near Denver' },
    { id: 38, keywords: 'home-projects', title: 'Home Projects' },
    { id: 39, keywords: 'toronto-condo', title: 'Toronto Condo and Alleyway' },
    { id: 40, keywords: 'calendar-2004', title: '2004 RockCairn.com Calendar' },
    { id: 41, keywords: 'calendar-2005', title: '2005 RockCairn.com Calendar' },
    { id: 42, keywords: 'calendar-2006', title: '2006 RockCairn.com Calendar' },
    { id: 43, keywords: 'calendar-2007', title: '2007 RockCairn.com Calendar' },
    { id: 44, keywords: 'calendar-2008', title: '2008 RockCairn.com Calendar' },
    {
      id: 45,
      keywords: 'loma',
      title: 'Loma,CO to Westwater,UT Canoe Trip July 8-10, 2005',
    },
    { id: 46, keywords: 'new_york_city-nov-2005', title: '' },
    {
      id: 47,
      keywords: 'las_vegas',
      title: 'Las Vegas Nevada, Tim&apos;s Party Weekend Apr. 14-17, 2006',
    },
    {
      id: 48,
      keywords: 'colordo_trail-monarch',
      title: 'Monarch Pass Area, Colorado, farewell trip Aug. 16-17, 2006',
    },
    {
      id: 49,
      keywords: 'awenda-sept-2006',
      title: 'Awenda Provintial Park, Ontario, Sep. 8-9, 2006',
    },
    {
      id: 50,
      keywords: 'tucson-mar-2007',
      title: 'Tucson, Arizona, Penny and Drew Wedding, Mar. 21-26, 2007',
    },
    {
      id: 51,
      keywords: 'allegheny-jul-2007',
      title: 'Allegheny Nat, Forest, Pennsylvania, Jul. 13-15, 2007',
    },
    {
      id: 52,
      keywords: 'bruce_trail-2007',
      title: 'Bruce Trail, Ontario, 2007',
    },
    {
      id: 53,
      keywords: 'maroon',
      title: 'Maroon Bells, Aspen Trip July 26, 2002',
    },
    {
      id: 54,
      keywords: 'lincoln-democrat-bross',
      title: 'Lincoln Group, Alma Trip August 10, 2002',
    },
    {
      id: 55,
      keywords: 'sherman',
      title: 'Mount Sherman, Fairplay Trip June 26, 2004',
    },
    {
      id: 56,
      keywords: 'evans',
      title: 'Mount Evans, Idaho Springs Day Trip August 17, 2002',
    },
    {
      id: 57,
      keywords: 'evans-2005',
      title: 'Mount Evans, Idaho Springs Day Trip July 5, 2005',
    },
    {
      id: 58,
      keywords: 'belford-oxford-missouri',
      title: 'Belford Group, Buena Vista Trip August 23-25, 2002',
    },
    {
      id: 59,
      keywords: 'huron',
      title: 'Huron Peak, Buena Vista Trip August 23-25, 2002',
    },
    {
      id: 60,
      keywords: 'holy_cross',
      title: 'Mount of the Holy Cross, Minturn Trip September 06-07, 2002',
    },
    {
      id: 61,
      keywords: 'holy_cross-1999',
      title: 'Holy Cross Wilderness, Backpack Trip August 6-8, 1999',
    },
    {
      id: 62,
      keywords: 'redcloud-sunshine',
      title: 'Redcloud and Sunshine, Lake City Trip September 20-22, 2002',
    },
    {
      id: 63,
      keywords: 'handies',
      title: 'Handies and Engineer Pass, Lake City Trip September 20-22, 2002',
    },
    {
      id: 64,
      keywords: 'uncompahgre-wetterhorn',
      title: 'Uncompahgre and Wetterhorn, Lake City Trip September 20-22, 2002',
    },
    {
      id: 65,
      keywords: 'uncompahgre',
      title: 'Uncompahgre, Ouray Trip August 20-22, 2004',
    },
    {
      id: 66,
      keywords: 'la_plata-elbert',
      title: 'La Plata Peak and Mount Elbert, Leadville Trip July 20-22, 2002',
    },
    {
      id: 67,
      keywords: 'grays-torreys-quandary',
      title: 'Condo Trip in Summit County June 30-July 2, 2002',
    },
    {
      id: 68,
      keywords: 'grays',
      title: 'Condo Trip in Summit County July 2, 2006',
    },
    {
      id: 69,
      keywords: 'massive',
      title: 'Mount Massive, Leadville Trip August, 2001',
    },
    {
      id: 70,
      keywords: 'shavano-tabeguache',
      title: 'Mount Shavano and Tabeguache/Salida Trip June 6-8, 2003',
    },
    {
      id: 71,
      keywords: 'antero',
      title: 'Mount Antero/Salida Trip (06/8/2003 and 07/10/2004)',
    },
    {
      id: 72,
      keywords: 'san_luis',
      title: 'San Luis Peak/Creede Trip June 20-21, 2003',
    },
    {
      id: 73,
      keywords: 'sneffels',
      title: 'Mount Sneffels/Ouray Trip (06/22/2003 and 07/19/2004)',
    },
    {
      id: 74,
      keywords: 'princeton',
      title: 'Mount Princeton/Buena Vista Trip June 27-29, 2003',
    },
    {
      id: 75,
      keywords: 'harvard-columbia',
      title: 'Mount Harvard and Columbia/Buena Vista Trip June 27-29, 2003',
    },
    {
      id: 76,
      keywords: 'yale',
      title: 'Mount Yale/Buena Vista Trip June 27-29, 2003',
    },
    {
      id: 77,
      keywords: 'eolos-windom-sunlight',
      title: 'Eolus Group/Chicago Basin/Durango Trip July 3-5, 2003',
    },
    {
      id: 78,
      keywords: 'wilson_peak-mount_wilson-el_diente',
      title: 'Wilson Group/Telluride Trip (07/12/2003 and 07/18/2004)',
    },
    {
      id: 79,
      keywords: 'castle',
      title:
        'Castle (and Conundrum)/Castle Creek TH/Aspen Trip July 25-27, 2003',
    },
    {
      id: 80,
      keywords: 'pyramid',
      title: 'Pyramid Peak/Castle Creek TH/Aspen Trip July 25-27, 2003',
    },
    {
      id: 81,
      keywords: 'pikes',
      title:
        'Pikes Peak/Crags Campground TH/Divide Day Trip (08/2/2003 and 06/12/2004)',
    },
    {
      id: 82,
      keywords: 'crestone-humbolt-kit_carson',
      title: 'Crestone Group/Colony Lakes TH/Westcliffe Trip August 8-10, 2003',
    },
    {
      id: 83,
      keywords: 'longs',
      title: 'Longs Peak/Ranger Station TH/Estes Park Trip August 15-16, 2003',
    },
    {
      id: 84,
      keywords: 'capitol',
      title: 'Capitol Peak/Capitol Creek TH/Aspen Trip August 22-24, 2003',
    },
    {
      id: 85,
      keywords: 'blanca-lindsey-elligwood-little_bear',
      title: 'Blanca Group/Como Lake TH/Alamosa Trip Aug. 29-Sept. 1, 2003',
    },
    {
      id: 86,
      keywords: 'snowmass',
      title:
        'Snowmass Mountain/Maroon-Snowmass TH/Aspen Trip September 5-6, 2003',
    },
    {
      id: 87,
      keywords: 'james',
      title: 'James Peak, Tolland Day Trip July 3, 2005',
    },
    {
      id: 88,
      keywords: 'whitney',
      title: 'Mount Whitney, Lone Pine-CA Trip July 11-12, 2005',
    },
    {
      id: 89,
      keywords: 'culebra',
      title: 'Culebra Peak, San Luis Trip July 22-23, 2005',
    },
    {
      id: 90,
      keywords: 'neva',
      title: 'Mount Neva, Tabernash Trip August 21, 2005',
    },
    {
      id: 91,
      keywords: 'navajo',
      title: 'Navajo Peak, Ward Trip September 17, 2005',
    },
    {
      id: 92,
      keywords: 'new_orleans',
      title: 'New Orleans, June 27 - July 1, 2012',
    },
    {
      id: 93,
      keywords: 'rochester',
      title: 'Rochester, Cottage Vacation, August 18-25, 2012',
    },
    {
      id: 94,
      keywords: 'montreal',
      title: 'Montreal, Quebec, September 9-11, 2012',
    },
    {
      id: 95,
      keywords: 'grays-torreys',
      title: 'Grays and Torreys Peaks, July 9, 2013',
    },
    {
      id: 96,
      keywords: 'walt-disney-world-2013',
      title: 'Walt Disney World, June 30-July 3, 2013',
    },
    {
      id: 97,
      keywords: 'glenwood-springs-2013',
      title: 'Glenwood Springs, Colorado, July 10-12, 2013',
    },
    {
      id: 98,
      keywords: 'denver-july-2013',
      title: 'Denver, Colorado, July 4-28, 2013',
    },
    {
      id: 99,
      keywords: 'bierstadt',
      title: 'Mount Bierstadt - Georgetown Day Trip, Aug 3, 2020',
    },
  ]);
};
