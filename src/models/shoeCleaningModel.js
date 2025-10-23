import { supabase } from '../config/supabaseClient.js';

export const createItem = async (data) => {
    const { data: item, error } = await supabase
        .from('shoe_cleaning')
        .insert([{
            customer_name: data.customerName,
            shoe_type: data.shoeType,
            service_type: data.serviceType,
            status: 'Pending',
            notes: data.notes,
            created_at: new Date().toISOString()
        }])
        .select()
        .single();

    if (error) throw error;
    return item;
};

export const getAllItems = async (status = null) => {
    let query = supabase
        .from('shoe_cleaning')
        .select('*')
        .order('created_at', { ascending: false });

    if (status) {
        query = query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
};

export const getItemById = async (id) => {
    const { data, error } = await supabase
        .from('shoe_cleaning')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data;
};

export const updateItem = async (id, data) => {
    const { data: item, error } = await supabase
        .from('shoe_cleaning')
        .update({
            customer_name: data.customerName,
            shoe_type: data.shoeType,
            service_type: data.serviceType,
            status: data.status,
            notes: data.notes,
            updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return item;
};

export const deleteItem = async (id) => {
    const { error } = await supabase
        .from('shoe_cleaning')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return true;
};